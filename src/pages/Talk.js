import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Layout from "../components/templates/Layout";
import ConferenceHall from "../services/ConferenceHall";
import { FavoritesContext } from "../contexts/FavoritesContext";
import TalkDisplay from "../components/organisms/TalkDisplay";
import FAV from "../components/atoms/FAV";
import Icon from "../components/atoms/Icon";
import Favorite from "../services/Favorite";

const propTypes = {
  match: PropTypes.object.isRequired
};

const defaultProps = {
  match: { param: { id: "0" } }
};

function Talk({ match }) {
  const [talk, setTalk] = useState({});
  const [loading, setLoading] = useState(true);
  const favoritesContext = useContext(FavoritesContext);

  useEffect(() => {
    async function fetchData() {
      const data = await ConferenceHall.getData();
      const filteredTalk = data.filter(talk => talk.id === match.params.id);
      setTalk(filteredTalk[0]);
      setLoading(false);
    }

    fetchData();
  }, [match.params.id]);

  const toggleFavorite = () => {
    if (Favorite.isFavorite(talk.id)) {
      favoritesContext.removeFavorite(talk.id);
    } else {
      favoritesContext.addFavorite(talk.id);
    }
  };

  return (
    <Layout loading={loading} title={`${talk.type} - ${talk.hour}`}>
      <TalkDisplay talk={talk} />
      <FAV isFavorite={Favorite.isFavorite(talk.id)} onClick={toggleFavorite}>
        <Icon>favorite</Icon>
      </FAV>
    </Layout>
  );
}

Talk.propTypes = propTypes;
Talk.defaultProps = defaultProps;

export default Talk;
