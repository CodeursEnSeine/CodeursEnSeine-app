import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Layout from "../components/templates/Layout";
import ConferenceHall from "../services/ConferenceHall";
import TalkDisplay from "../components/organisms/TalkDisplay";

const propTypes = {
  match: PropTypes.object.isRequired
};

const defaultProps = {
  match: { param: { id: "0" } }
};

function Talk({ match }) {
  const [talk, setTalk] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await ConferenceHall.getData();
      const filteredTalk = data.filter(talk => talk.id === match.params.id);
      setTalk(filteredTalk[0]);
      setLoading(false);
    }

    fetchData();
  }, [match.params.id]);

  return (
    <Layout loading={loading} title={`${talk.type} - ${talk.hour}`}>
      <TalkDisplay talk={talk} />
    </Layout>
  );
}

Talk.propTypes = propTypes;
Talk.defaultProps = defaultProps;

export default Talk;
