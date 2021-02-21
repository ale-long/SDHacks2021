import React from 'react'
import LoginPage from './pages/LoginPage'
import LandingPage from './pages/LandingPage'
import { Route, Switch, BrowserRouter as Router, useLocation } from "react-router-dom";
import ClassCard from "./components/ClassCard";
import ClassGroupChat from './components/ClassGroupChat'
import styles from "./css/app.module.css"

// import GetClasses from "./components/GetClasses"
// Put all the page components here
function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route
            exact path={"/"}
            component={LoginPage}
          />

          <Route
            exact path={"/Landing"}
            component={LandingPage}
          />
          <Route
            exact path="/Landing/:classId" component={ClassGroupChat}
          />
        </Switch>
      </Router>
    </div>

  );
}

export default App;