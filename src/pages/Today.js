import React, { Fragment } from "react";
import Layout from "../components/templates/Layout";
import Card from "../components/molecules/Card";
import { useTalks } from "../hooks/useTalks";
import { groupBy } from 'lodash';
import Hour from "../components/atoms/Hour";

export default function Today() {
  const [talks, loading] = useTalks();

  const talksGroupedByHour = groupBy(talks, 'hour');

  return (
    <Layout loading={loading} title="Programme">
      {Object.keys(talksGroupedByHour).map((hour) => (
          <Fragment key={hour}>
            <Hour>{hour}</Hour>
            {talksGroupedByHour[hour].map((talk) => (
                <Card key={talk.id} to={`/talks/${talk.id}`} conference={talk} />
            ))}
          </Fragment>
      ))}
    </Layout>
  );
}
