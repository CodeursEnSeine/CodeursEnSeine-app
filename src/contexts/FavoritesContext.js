import React, { useContext, useEffect, useState } from "react";
import Favorite from "../services/Favorite";
import { useTalks } from "../hooks/useTalks";

export const FavoritesContext = React.createContext();
export const useFavoriteContext = () => useContext(FavoritesContext);

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [talks] = useTalks();

  useEffect(() => {
    setFavorites(Favorite.getFavorites());
  }, [setFavorites]);

  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission();

      const notifyNextConf = () => {
        if (Notification.permission === "granted") {
          const notifiedString = localStorage.getItem("ces-favorite-notified");

          /** @type {Array<string>} */
          const notified = (() => {
            if (notifiedString) {
              return JSON.parse(notifiedString);
            } else {
              return [];
            }
          })();

          /** @type {Array} */
          const favoriteTalks = talks
            .filter(talk => favorites.includes(talk.id))
            .filter(talk => talk.hour.split(":")[0] > new Date().getHours())
            .sort(
              (talk1, talk2) =>
                talk1.hour.split(":")[0] - talk2.hour.split(":")[0]
            );

          const nextTalk = favoriteTalks.shift();

          if (nextTalk) {
            if (!notified.includes(nextTalk.id)) {
              navigator.serviceWorker.ready.then(registration => {
                registration.showNotification(nextTalk.title);
              });

              notified.push(nextTalk.id);
            }
          }

          localStorage.setItem(
            "ces-favorite-notified",
            JSON.stringify(notified)
          );
        }
      };

      window.addEventListener("focus", notifyNextConf, false);

      return () => {
        window.removeEventListener("focus", notifyNextConf, false);
      };
    }
  }, [favorites, talks]);

  const addFavorite = favorite => {
    Favorite.addFavorite(favorite);

    setFavorites(Favorite.getFavorites());
  };

  const removeFavorite = favorite => {
    Favorite.removeFavorite(favorite);

    setFavorites(Favorite.getFavorites());
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
