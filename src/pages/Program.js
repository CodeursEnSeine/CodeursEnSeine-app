import React, { Fragment, useEffect } from "react";
import { useFavoriteContext } from "../contexts/FavoritesContext";
import Layout from "../components/templates/Layout";
import Card from "../components/Card";
import { useTalks } from "../hooks/useTalks";
import { groupBy } from "lodash";
import Hour from "../components/Hour";
import { sortHours } from "../helpers/sortHours";

export const PROGRAM_SCROLL_OFFSET_KEY = "scroll-offset";

export default function Program({ isFavorite = false }) {
  const [talks, loading] = useTalks();
  const { favorites } = useFavoriteContext();

  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, sessionStorage.getItem(PROGRAM_SCROLL_OFFSET_KEY));

      const lastPosition = () => {
        sessionStorage.setItem(PROGRAM_SCROLL_OFFSET_KEY, window.scrollY);
      };

      window.addEventListener("scroll", lastPosition);

      return () => {
        window.removeEventListener("scroll", lastPosition);
      };
    }
  }, [loading]);

  const talksGroupedByHour = groupBy(talks, "hour");

  const sortRoom = (a, b) => a.room.localeCompare(b.room);

  const getContent = () => {
    if (isFavorite) {
      if (favorites.length === 0) {
        return (
          <>
            <p>Pas de conférences dans vos favoris pour le moment.</p>
            <p>Ajoutez en pour avoir une vue rapide sur cette page.</p>
          </>
        );
      }

      return Object.keys(talksGroupedByHour)
        .sort(sortHours)
        .map(
          hour =>
            talksGroupedByHour[hour].some(talk =>
              favorites.includes(talk.id)
            ) && (
              <Fragment key={hour}>
                <Hour>{hour}</Hour>
                {talksGroupedByHour[hour]
                  .sort(sortRoom)
                  .map(
                    talk =>
                      favorites.includes(talk.id) && (
                        <Card
                          key={talk.id}
                          to={`/talks/${talk.id}`}
                          talk={talk}
                        />
                      )
                  )}
              </Fragment>
            )
        );
    }

    return Object.keys(talksGroupedByHour)
      .sort(sortHours)
      .map(hour => (
        <Fragment key={hour}>
          <Hour>{hour}</Hour>
          {talksGroupedByHour[hour]
            .sort(sortRoom)
            .map(talk =>
              talk.state === "event" ? (
                <Card key={talk.id} talk={talk} />
              ) : (
                <Card key={talk.id} to={`/talks/${talk.id}`} talk={talk} />
              )
            )}
        </Fragment>
      ));
  };

  return (
    <Layout loading={loading} title={isFavorite ? "Favoris" : "Programme"}>
      {getContent()}
    </Layout>
  );
}
