import React from "react";
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";
import { MdFavorite, MdToday, MdLocationOn } from "react-icons/md";
import BottomNavigation from "./components/organisms/BottomNavigation";
import Favorite from "./pages/Favorite";
import Today from "./pages/Today";
import Map from "./pages/Map";
import { themeCES } from "./themes/ces";
import Talk from "./pages/Talk";
import { FavoritesContextProvider } from "./contexts/FavoritesContext";
import BottomNavigationAction from "./components/molecules/BottomNavigationAction";
import { HostedBy } from "./components/HostedBy";

function App() {
  return (
    <HttpsRedirect>
      <React.StrictMode>
        <ThemeProvider theme={themeCES}>
          <CSSReset />
          <Box color="brand.900">
            <FavoritesContextProvider>
              <Router>
                <HostedBy />
                <Route exact path="/" component={Today} />
                <Route path="/favorite" component={Favorite} />
                <Route path="/map" component={Map} />
                <Route path="/talks/:id" component={Talk} />
                <BottomNavigation>
                  <BottomNavigationAction
                    to="/favorite"
                    iconElement={MdFavorite}
                  >
                    Favoris
                  </BottomNavigationAction>
                  <BottomNavigationAction exact to="/" iconElement={MdToday}>
                    Programme
                  </BottomNavigationAction>
                  <BottomNavigationAction to="/map" iconElement={MdLocationOn}>
                    Plan
                  </BottomNavigationAction>
                </BottomNavigation>
              </Router>
            </FavoritesContextProvider>
          </Box>
        </ThemeProvider>
      </React.StrictMode>
    </HttpsRedirect>
  );
}

export default App;
