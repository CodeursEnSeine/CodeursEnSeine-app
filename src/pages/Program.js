import React, { Fragment, useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import Layout from "../components/templates/Layout";
import Card from "../components/Card";
import { useTalks } from "../hooks/useTalks";
import { groupBy } from "lodash";
import Hour from "../components/Hour";
import { sortHours } from "../helpers/sortHours";

export default function Program({ isFavorite = false }) {
  const [talks, loading] = useTalks();

  const talksGroupedByHour = groupBy(talks, "hour");

  const favoritesContext = useContext(FavoritesContext);

  const { favorites } = favoritesContext;

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
                  .sort((a, b) => a.room.localeCompare(b.room))
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
            .sort((a, b) => a.room.localeCompare(b.room))
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
