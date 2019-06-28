import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BottomNavigation from "./components/organisms/BottomNavigation";
import BottomNavigationAction from "./components/molecules/BottomNavigationAction";
import Favorite from "./pages/Favorite";
import Today from "./pages/Today";
import Map from "./pages/Map";
import { CESTheme } from "./themes";

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={CESTheme}>
        <Router>
          <Route exact path="/" component={Today} />
          <Route path="/favorite" component={Favorite} />
          <Route path="/map" component={Map} />
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
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
