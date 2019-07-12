export default class Favorite {
  /**
   * Get the favorites stored in local storage
   *
   * @returns {Array<String>}
   */
  static getFavorites = () => {
    const favorites = localStorage.getItem("ces-favorite");

    if (favorites) {
      return JSON.parse(favorites);
    } else {
      return [];
    }
  };

  /**
   * @param
   */
  static setFavorites = favorites => {
    localStorage.setItem("ces-favorite", JSON.stringify(favorites));
  };

  static addFavorite = id => {
    const favorites = Favorite.getFavorites();

    // If it is already a favorite, we do not add it again.
    if (favorites.includes(id)) {
      return;
    }

    favorites.push(id);

    Favorite.setFavorites(favorites);
  };

  static isFavorite = id => {
    return Favorite.getFavorites().includes(id);
  };

  static removeFavorite = id => {
    const favorites = Favorite.getFavorites();

    const newFavorites = favorites.filter(favorite => favorite !== id);

    Favorite.setFavorites(newFavorites);
  };
}
