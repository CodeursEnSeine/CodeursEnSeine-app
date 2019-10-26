import React from "react";
import { ThemeProvider, CSSReset, Box, Flex } from "@chakra-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MdFavorite, MdToday, MdInfo, MdBusiness } from "react-icons/md";
import Navigation from "./components/Navigation";
import { Program } from "./pages/Program";
import { Informations } from "./pages/Informations";
import { themeCES } from "./themes/ces";
import { Talk } from "./pages/Talk";
import { FavoritesContextProvider } from "./contexts/FavoritesContext";
import NavigationAction from "./components/NavigationAction";
import routes from "./routes";
import { Topbar } from "./components/Topbar";
import { SCROLLVIEW_ID } from "./helpers/backToTop";
import { NotFound404 } from "./pages/NotFound404";
import { Sponsors } from "./pages/Sponsors";

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
                  id={SCROLLVIEW_ID}
                  position="absolute"
                  top="0"
                  left="0"
                  bottom="0"
                  right="0"
                  overflow="auto"
                >
                  <Switch>
                    <Route exact path={routes.program.pathname}>
                      <Program />
                    </Route>
                    <Route exact path={routes.favorites.pathname}>
                      <Program isFavorite />
                    </Route>
                    <Route exact path={routes.info.pathname}>
                      <Informations />
                    </Route>
                    <Route exact path={routes.talk.pathname}>
                      <Talk />
                    </Route>
                    <Route exact path={routes.sponsors.pathname}>
                      <Sponsors />
                    </Route>
                    <Route path={routes.notFound.pathname}>
                      <NotFound404 />
                    </Route>
                  </Switch>
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
                  iconElement={MdInfo}
                >
                  Info
                </NavigationAction>
                <NavigationAction
                  to={routes.sponsors.pathname}
                  iconElement={MdBusiness}
                >
                  Sponsors
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
