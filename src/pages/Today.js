import React, { Fragment, useEffect, useRef } from "react";
import Layout from "../components/templates/Layout";
import Card from "../components/molecules/Card";
import { useTalks } from "../hooks/useTalks";
import { groupBy } from "lodash";
import Hour from "../components/atoms/Hour";
import { sortHours } from "../helpers/sortHours";
import GreyCard from "../components/molecules/GreyCard";

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
                  <GreyCard key={talk.id} conference={talk} />
                ) : (
                  <Card
                    key={talk.id}
                    to={`/talks/${talk.id}`}
                    conference={talk}
                  />
                )
              )}
          </Fragment>
        ))}
    </Layout>
  );
}
