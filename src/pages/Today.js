import React, { useEffect } from "react";
import Layout from "../components/templates/Layout";
import ConferenceHall from "../services/ConferenceHall";
import Card from "../components/molecules/Card";

export default function Today() {
  useEffect(() => {
    async function fetchData() {
      const data = await ConferenceHall.getData();
      console.log(data);
    }

    fetchData();
  });

  const conferences = [
    {
      id: "1",
      title: "Managenement d'une équipe sportive",
      speaker: "Guy Fournier",
      room: "A"
    },
    {
      id: "2",
      title: "Symfony 4 - le framework PHP bâti pour grandir avec vos projets",
      speaker: "Nicolas Grekas",
      room: "A"
    }
  ];

  return (
    <Layout title="Programme">
      {conferences.map(conference => (
        <Card
          key={conference.id}
          to={`/talks/${conference.id}`}
          conference={conference}
        />
      ))}
    </Layout>
  );
}
