import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/templates/Layout";
import { FavoritesContext } from "../contexts/FavoritesContext";
import ConferenceHall from "../services/ConferenceHall";
import Card from "../components/molecules/Card";

export default function Favorite() {
  const [loading, setLoading] = useState(true);
  const [talks, setTalks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await ConferenceHall.getData();
      setTalks(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  const favoritesContext = useContext(FavoritesContext);

  if (favoritesContext.state.favorites.length === 0) {
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
      {talks.map(
        talk =>
          favoritesContext.state.favorites.includes(talk.id) && (
            <Card key={talk.id} to={`/talks/${talk.id}`} conference={talk} />
          )
      )}
    </Layout>
  );
}
