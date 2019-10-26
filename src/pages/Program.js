import React, { Fragment, useEffect } from "react";
import { Box } from "@chakra-ui/core";
import { useFavoriteContext } from "../contexts/FavoritesContext";
import { Layout } from "../components/templates/Layout";
import Card from "../components/Card";
import { useTalks } from "../hooks/useTalks";
import { groupBy } from "lodash";
import Hour from "../components/Hour";
import { sortHours } from "../helpers/sortHours";
import { CardSkeleton } from "../components/CardSkeleton";
import { SCROLLVIEW_ID } from "../helpers/backToTop";

export const PROGRAM_SCROLL_OFFSET_KEY = "scroll-offset";

export function Program({ isFavorite = false }) {
  const [talks, loading] = useTalks();
  const { favorites } = useFavoriteContext();

  useEffect(() => {
    if (!loading) {
      const IS_FAVORITE_KEY = `${PROGRAM_SCROLL_OFFSET_KEY}${
        isFavorite ? "-fav" : ""
      }`;

      const scrollview = document.getElementById(SCROLLVIEW_ID);

      scrollview.scrollTo(0, sessionStorage.getItem(IS_FAVORITE_KEY));

      const lastPosition = () => {
        sessionStorage.setItem(IS_FAVORITE_KEY, scrollview.scrollTop);
      };

      scrollview.addEventListener("scroll", lastPosition);

      return () => {
        scrollview.removeEventListener("scroll", lastPosition);
      };
    }
  }, [loading, isFavorite]);

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
                          to={`/talk/${talk.id}`}
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
                <Card key={talk.id} to={`/talk/${talk.id}`} talk={talk} />
              )
            )}
        </Fragment>
      ));
  };

  return (
    <Layout>
      {loading && [...Array(20).keys()].map(key => <CardSkeleton key={key} />)}
      {!loading && <Box>{getContent()}</Box>}
    </Layout>
  );
}
