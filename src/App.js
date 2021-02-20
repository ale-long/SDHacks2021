import React from 'react'
import LoginPage from './pages/LoginPage'
import LandingPage from './pages/LandingPage'
import {Route, Switch, BrowserRouter as Router, useLocation} from "react-router-dom";
import GetClasses from './components/GetClasses'
import RouteTestComponent from "./components/RouteTestComponent";
// Put all the page components here
function App() {
  return (
    <div>
      <GetClasses/>
      <Router>
        <Switch>
          <Route
            exact path = {"/"}
            component={LoginPage}
          />
        
          <Route
            exact path={"/class"}
            component={RouteTestComponent}
          />
        </Switch>
      </Router>
    </div>

  );
}

export default App;