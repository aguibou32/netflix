import React from "react";
import "./App.css";
import HomeScreen from "./components/screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const user = null;
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/" exact>
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}
export default App;
