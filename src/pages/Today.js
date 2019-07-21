import React, { useEffect, useState } from "react";
import Layout from "../components/templates/Layout";
import ConferenceHall from "../services/ConferenceHall";
import Card from "../components/molecules/Card";

function filterSelectedTalks(program, conferenceHall) {
  const selectedTalks = [];

  conferenceHall.talks.forEach(talk => {
    program.talks.forEach(t => {
      if (talk.id === t.id) {
        selectedTalks.push(talk);
      }
    });
  });

  return selectedTalks;
}

export default function Today() {
  const [loading, setLoading] = useState(true);
  const [talks, setTalks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const program = await ConferenceHall.getProgram();
      const data = await ConferenceHall.getData();
      const selectedTalks = filterSelectedTalks(program, data);
      setTalks(selectedTalks);
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
