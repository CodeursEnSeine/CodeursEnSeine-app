import React, { useContext } from "react";
import Layout from "../components/templates/Layout";
import { FavoritesContext } from "../contexts/FavoritesContext";
import Card from "../components/molecules/Card";
import { useTalks } from "../hooks/useTalks";

export default function Favorite() {
  const [talks, loading, Loader] = useTalks();

  const favoritesContext = useContext(FavoritesContext);

  if (favoritesContext.favorites.length === 0) {
    return (
      <Layout title="Favoris">
        <p>Pas de conférences dans vos favoris pour le moment.</p>
        <p>
          Ajoutez en pour avoir des notifications de quand vos conférences
          favorites débutent !
        </p>
      </Layout>
    );
  }

  return (
    <Layout title="Favoris">
      {loading ? (
        <Loader />
      ) : (
        talks.map(
          talk =>
            favoritesContext.favorites.includes(talk.id) && (
              <Card key={talk.id} to={`/talks/${talk.id}`} conference={talk} />
            )
        )
      )}
    </Layout>
  );
}
