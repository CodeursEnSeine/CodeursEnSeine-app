import React, { useContext } from "react";
import { IconButton } from "@chakra-ui/core";
import { MdFavorite } from "react-icons/md";
import { FavoritesContext } from "../contexts/FavoritesContext";
import Favorite from "../services/Favorite";

const propTypes = {};
const defaultProps = {};

const FAV = ({ talk, ...props }) => {
  const { addFavorite, removeFavorite } = useContext(FavoritesContext);
  const isFavorite = Favorite.isFavorite(talk.id);

  return (
    <IconButton
      isRound
      variantColor={isFavorite ? "pink" : "gray"}
      icon={MdFavorite}
      onClick={() => {
        if (isFavorite) {
          removeFavorite(talk.id);
        } else {
          addFavorite(talk.id);
        }
      }}
      {...props}
    />
  );
};

FAV.propTypes = propTypes;
FAV.defaultProps = defaultProps;

export default FAV;
