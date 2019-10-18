import React from "react";
import { ThemeProvider, CSSReset, Box, Flex } from "@chakra-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MdFavorite, MdToday, MdLocationOn } from "react-icons/md";
import Navigation from "./components/Navigation";
import Program from "./pages/Program";
import Map from "./pages/Map";
import { themeCES } from "./themes/ces";
import Talk from "./pages/Talk";
import { FavoritesContextProvider } from "./contexts/FavoritesContext";
import NavigationAction from "./components/NavigationAction";
import routes from "./routes";
import { Topbar } from "./components/Topbar";

const updateCssViewportHeight = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

updateCssViewportHeight();
window.addEventListener("resize", () => {
  updateCssViewportHeight();
});

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={themeCES}>
        <CSSReset />
        <Router>
          <FavoritesContextProvider>
            <Flex
              color="brand.900"
              direction="column"
              h="100vh"
              style={{
                height: "calc(var(--vh, 1vh) * 100)"
              }}
            >
              <Topbar zIndex="1" />
              <Box flex="1" position="relative">
                <Box
                  id="scrollview"
                  position="absolute"
                  top="0"
                  left="0"
                  bottom="0"
                  right="0"
                  overflow="auto"
                >
                  <Route
                    exact
                    path={routes.program.pathname}
                    component={Program}
                  />
                  <Route exact path={routes.favorites.pathname}>
                    <Program isFavorite />
                  </Route>
                  <Route exact path={routes.info.pathname}>
                    <Map />
                  </Route>
                  <Route exact path={routes.talk.pathname}>
                    <Talk />
                  </Route>
                </Box>
              </Box>
              <Navigation>
                <NavigationAction
                  to={routes.program.pathname}
                  iconElement={MdToday}
                >
                  Programme
                </NavigationAction>
                <NavigationAction
                  to={routes.favorites.pathname}
                  iconElement={MdFavorite}
                >
                  Favoris
                </NavigationAction>
                <NavigationAction
                  to={routes.info.pathname}
                  iconElement={MdLocationOn}
                >
                  Info
                </NavigationAction>
              </Navigation>
            </Flex>
          </FavoritesContextProvider>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
