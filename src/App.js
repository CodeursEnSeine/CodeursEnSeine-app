import React from "react";
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MdFavorite, MdToday, MdLocationOn } from "react-icons/md";
import BottomNavigation from "./components/BottomNavigation";
import Program from "./pages/Program";
import Map from "./pages/Map";
import { themeCES } from "./themes/ces";
import Talk from "./pages/Talk";
import { FavoritesContextProvider } from "./contexts/FavoritesContext";
import BottomNavigationAction from "./components/BottomNavigationAction";
import { HostedBy } from "./components/HostedBy";

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={themeCES}>
        <CSSReset />
        <Box color="brand.900">
          <FavoritesContextProvider>
            <Router>
              <HostedBy />
              <Route exact path="/" component={Program} />
              <Route path="/favorite" render={() => <Program isFavorite />} />
              <Route path="/map" component={Map} />
              <Route path="/talks/:id" component={Talk} />
              <BottomNavigation>
                <BottomNavigationAction exact to="/" iconElement={MdToday}>
                  Programme
                </BottomNavigationAction>
                <BottomNavigationAction to="/favorite" iconElement={MdFavorite}>
                  Favoris
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
  );
}

export default App;
