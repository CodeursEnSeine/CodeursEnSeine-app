import React from "react";
import Favorite from "../services/Favorite";

export const FavoritesContext = React.createContext();

export class FavoritesContextProvider extends React.Component {
  state = {
    favorites: []
  };

  componentDidMount() {
    this.updateFavorite();
  }

  updateFavorite = () => {
    const favorites = Favorite.getFavorites();
    this.setState({ favorites });
  };

  addFavorite = favorite => {
    Favorite.addFavorite(favorite);

    this.updateFavorite();
  };

  removeFavorite = favorite => {
    Favorite.removeFavorite(favorite);

    this.updateFavorite();
  };

  render() {
    return (
      <FavoritesContext.Provider
        value={{
          state: this.state,
          addFavorite: this.addFavorite,
          removeFavorite: this.removeFavorite
        }}
      >
        {this.props.children}
      </FavoritesContext.Provider>
    );
  }
}
