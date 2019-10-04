import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams, useHistory } from "react-router-dom";
import Layout from "../components/templates/Layout";
import TalkDisplay from "../components/TalkDisplay";
import FAV from "../components/FAV";
import { useTalks } from "../hooks/useTalks";
import SpeakerDisplay from "../components/SpeakerDisplay";
import { SponsorsDisplay } from "../components/SponsorsDisplay";

const propTypes = {
  match: PropTypes.object.isRequired
};

const defaultProps = {
  match: { param: { id: "0" } }
};

function Talk() {
  const [talk, setTalk] = useState({});
  const [loading, setLoading] = useState(true);
  const [talks] = useTalks();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      if (talks.length !== 0) {
        const filteredTalk = talks.filter(talk => talk.id === id);
        setTalk(filteredTalk[0]);
        setLoading(false);
      }
    }

    fetchData();
  }, [id, talks]);

  const goBack = () => {
    history.push("/");
  };

  return (
    <Layout loading={loading} title={talk.title} goBack={goBack}>
      <TalkDisplay talk={talk} />
      {talk.speakers &&
        talk.speakers.map(speaker => (
          <SpeakerDisplay key={speaker.id} speaker={speaker} />
        ))}
      <SponsorsDisplay />
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
