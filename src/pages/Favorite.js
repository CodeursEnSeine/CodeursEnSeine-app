import React from "react";
import Layout from "../components/templates/Layout";

export default function Favorite() {
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
