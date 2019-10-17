import React from "react";
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MdFavorite, MdToday, MdLocationOn } from "react-icons/md";
import Navigation from "./components/Navigation";
import Program from "./pages/Program";
import Map from "./pages/Map";
import { themeCES } from "./themes/ces";
import Talk from "./pages/Talk";
import { FavoritesContextProvider } from "./contexts/FavoritesContext";
import NavigationAction from "./components/NavigationAction";
import { HostedBy } from "./components/HostedBy";
import routes from "./routes";

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={themeCES}>
        <CSSReset />
        <Box color="brand.900">
          <FavoritesContextProvider>
            <Router>
              <HostedBy />
              <Route exact path={routes.program.pathname} component={Program} />
              <Route exact path={routes.favorites.pathname}>
                <Program isFavorite />
              </Route>
              <Route exact path={routes.info.pathname}>
                <Map />
              </Route>
              <Route exact path={routes.talk.pathname}>
                <Talk />
              </Route>
              <Navigation>
                <NavigationAction to={routes.program.pathname} iconElement={MdToday}>
                  Programme
                </NavigationAction>
                <NavigationAction to={routes.favorites.pathname} iconElement={MdFavorite}>
                  Favoris
                </NavigationAction>
                <NavigationAction to={routes.program.pathname} iconElement={MdLocationOn}>
                  Plan
                </NavigationAction>
              </Navigation>
            </Router>
          </FavoritesContextProvider>
        </Box>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
