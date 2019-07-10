import React, { useEffect, useState } from "react";
import Layout from "../components/templates/Layout";
import ConferenceHall from "../services/ConferenceHall";
import Card from "../components/molecules/Card";

export default function Today() {
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

  return (
    <Layout loading={loading} title="Programme">
      {talks.map(talk => (
        <Card key={talk.id} to={`/talks/${talk.id}`} conference={talk} />
      ))}
    </Layout>
  );
}
