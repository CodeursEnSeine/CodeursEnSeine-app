import React from "react";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router, Route } from "react-router-dom";
import BottomNavigation from "./components/organisms/BottomNavigation";
import Favorite from "./pages/Favorite";
import Today from "./pages/Today";
import Map from "./pages/Map";
import { CESTheme } from "./themes";
import Talk from "./pages/Talk";
import { FavoritesContextProvider } from "./contexts/FavoritesContext";

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={CESTheme}>
        <FavoritesContextProvider>
          <Router basename="/">
            <Route exact path="/" component={Today} />
            <Route path="/favorite" component={Favorite} />
            <Route path="/map" component={Map} />
            <Route path="/talks/:id" component={Talk} />
            <BottomNavigation />
          </Router>
        </FavoritesContextProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
