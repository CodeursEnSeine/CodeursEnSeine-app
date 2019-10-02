import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import HttpsRedirect from "react-https-redirect";
import BottomNavigation from "./components/organisms/BottomNavigation";
import Favorite from "./pages/Favorite";
import Today from "./pages/Today";
import Map from "./pages/Map";
import { CESTheme } from "./themes";
import Talk from "./pages/Talk";
import { FavoritesContextProvider } from "./contexts/FavoritesContext";
import BottomNavigationAction from "./components/molecules/BottomNavigationAction";

const HostedBy = styled.div`
  padding: 4px
  background-image: ${props => props.theme.bottomNavigation.backgroundImage};
  color: white;
  text-align: center;
`;

function App() {
  return (
    <HttpsRedirect>
      <React.StrictMode>
        <ThemeProvider theme={CESTheme}>
          <FavoritesContextProvider>
            <Router>
              <HostedBy>
                Hosted By{" "}
                <a
                  href="https://www.clever-cloud.com"
                  style={{ color: "white" }}
                >
                  Clever Cloud
                </a>
              </HostedBy>
              <Route exact path="/" component={Today} />
              <Route path="/favorite" component={Favorite} />
              <Route path="/map" component={Map} />
              <Route path="/talks/:id" component={Talk} />
              <BottomNavigation>
                <BottomNavigationAction to="/favorite" icon="favorite">
                  Favoris
                </BottomNavigationAction>
                <BottomNavigationAction exact to="/" icon="today">
                  Programme
                </BottomNavigationAction>
                <BottomNavigationAction to="/map" icon="location_on">
                  Plan
                </BottomNavigationAction>
              </BottomNavigation>
            </Router>
          </FavoritesContextProvider>
        </ThemeProvider>
      </React.StrictMode>
    </HttpsRedirect>
  );
}

export default App;
