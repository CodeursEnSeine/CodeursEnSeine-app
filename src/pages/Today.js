import React, { Fragment } from "react";
import Layout from "../components/templates/Layout";
import Card from "../components/Card";
import { useTalks } from "../hooks/useTalks";
import { groupBy } from "lodash";
import Hour from "../components/Hour";
import { sortHours } from "../helpers/sortHours";

export default function Today() {
  const [talks, loading] = useTalks();

  const talksGroupedByHour = groupBy(talks, "hour");

  return (
    <Layout loading={loading} title="Programme">
      {Object.keys(talksGroupedByHour)
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
        ))}
    </Layout>
  );
}
