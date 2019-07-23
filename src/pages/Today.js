import React from "react";
import Layout from "../components/templates/Layout";
import Card from "../components/molecules/Card";
import { useTalks } from "../hooks/useTalks";

export default function Today() {
  const [talks, loading] = useTalks();

  return (
    <Layout loading={loading} title="Programme">
      {talks.map(talk => (
        <Card key={talk.id} to={`/talks/${talk.id}`} conference={talk} />
      ))}
    </Layout>
  );
}
