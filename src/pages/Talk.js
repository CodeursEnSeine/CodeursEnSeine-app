import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Layout from "../components/templates/Layout";
import TalkDisplay from "../components/organisms/TalkDisplay";
import FAV from "../components/atoms/FAV";
import { useTalks } from "../hooks/useTalks";
import SpeakerDisplay from "../components/organisms/SpeakerDisplay";

const propTypes = {
  match: PropTypes.object.isRequired
};

const defaultProps = {
  match: { param: { id: "0" } }
};

function Talk({ match }) {
  const [talk, setTalk] = useState({});
  const [loading, setLoading] = useState(true);
  const [talks] = useTalks();

  useEffect(() => {
    async function fetchData() {
      if (talks.length !== 0) {
        const filteredTalk = talks.filter(talk => talk.id === match.params.id);
        setTalk(filteredTalk[0]);
        setLoading(false);
      }
    }

    fetchData();
  }, [match.params.id, talks]);

  return (
    <Layout loading={loading} title={talk.title}>
      <TalkDisplay talk={talk} />
      {talk.speakers &&
        talk.speakers.map(speaker => (
          <SpeakerDisplay key={speaker.id} speaker={speaker} />
        ))}
      <FAV
        talk={talk}
        position="fixed"
        bottom="80px"
        right="8"
        size="lg"
        shadow="paper"
      />
    </Layout>
  );
}

Talk.propTypes = propTypes;
Talk.defaultProps = defaultProps;

export default Talk;
