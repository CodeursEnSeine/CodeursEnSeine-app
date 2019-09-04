import React, { useContext, Fragment } from "react";
import { groupBy } from "lodash";

import Layout from "../components/templates/Layout";
import { FavoritesContext } from "../contexts/FavoritesContext";
import Card from "../components/molecules/Card";
import { useTalks } from "../hooks/useTalks";
import Hour from "../components/atoms/Hour";
import { sortHours } from "../helpers/sortHours";

export default function Favorite() {
  const [talks, loading, Loader] = useTalks();

  const favoritesContext = useContext(FavoritesContext);

  const { favorites } = favoritesContext;

  if (favorites.length === 0) {
    return (
      <Layout title="Favoris">
        <p>Pas de conférences dans vos favoris pour le moment.</p>
        <p>Ajoutez en pour avoir une vue rapide sur cette page.</p>
      </Layout>
    );
  }

  const talksGroupedByHour = groupBy(talks, "hour");

  return (
    <Layout title="Favoris">
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          {Object.keys(talksGroupedByHour)
            .sort(sortHours)
            .map(
              hour =>
                talksGroupedByHour[hour].some(talk =>
                  favorites.includes(talk.id)
                ) && (
                  <Fragment key={hour}>
                    <Hour>{hour}</Hour>
                    {talksGroupedByHour[hour].map(
                      talk =>
                        favorites.includes(talk.id) && (
                          <Card
                            key={talk.id}
                            to={`/talks/${talk.id}`}
                            conference={talk}
                          />
                        )
                    )}
                  </Fragment>
                )
            )}
        </Fragment>
      )}
    </Layout>
  );
}
