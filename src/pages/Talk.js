import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Layout from "../components/templates/Layout";
import { useFavoriteContext } from "../contexts/FavoritesContext";
import TalkDisplay from "../components/organisms/TalkDisplay";
import FAV from "../components/atoms/FAV";
import Icon from "../components/atoms/Icon";
import Favorite from "../services/Favorite";
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
  const { removeFavorite, addFavorite } = useFavoriteContext();
  const [talks, ,] = useTalks();

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

  const toggleFavorite = () => {
    if (Favorite.isFavorite(talk.id)) {
      removeFavorite(talk.id);
    } else {
      addFavorite(talk.id);
    }
  };

  const title = talk => {
    if (talk.formats) {
      return `${talk.formats} - ${talk.hour}`;
    }

    return talk.hour;
  };

  return (
    <Layout loading={loading} title={title(talk)}>
      <TalkDisplay talk={talk} />
      {talk.speakers &&
        talk.speakers.map(speaker => (
          <SpeakerDisplay key={speaker.id} speaker={speaker} />
        ))}
      <FAV isFavorite={Favorite.isFavorite(talk.id)} onClick={toggleFavorite}>
        <Icon>favorite</Icon>
      </FAV>
    </Layout>
  );
}

Talk.propTypes = propTypes;
Talk.defaultProps = defaultProps;

export default Talk;
