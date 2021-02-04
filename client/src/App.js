import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import store from "./redux/store/store";
import { loadUser } from "./redux/actions/auth";
import setAuthToken from "./utils/setAuthToken";
import { createBrowserHistory } from "history";
import ForgotPassword from "./views/auth/ForgotPassword";
import ResetPassword from "./views/auth/ResetPassword";

import Landing from "./views/Talent/LandingSections/Landing";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register.js";
import Project from "./views/ProjectView/ProjectContainer";
import ProjectDetails from "./views/ProjectView/ProjectDetails/Project";
import CollaboratorView from "./views/CollaboratorView/Collaborator";
import GoogleLoginView from "./views/auth/GoogleLogin";
import AddTalent from "./views/Talent/talent-form/CreateTalent";
import EditTalent from "./views/Talent/talent-form/EditTalent";
import Talent from "./views/Talent/TalentView/TalentContainer";
import Dashboard from "./views/Talent/Dashboard/Dashboard";
import Fans from "./views/Talent/Fans/Fans";

const hist = createBrowserHistory();

// REDUX
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <div className="App">
      <Router history={hist}>
        <Switch>
          <Route exact path="/" component={Landing} />

          <Route exact path="/login-page" component={Login} />
          <Route exact path="/register-page" component={Register} />

          <Route exact path="/google" component={GoogleLoginView} />

          <Route exact path="/forgot-password" component={ForgotPassword} />

          <Route
            exact
            path="/reset-password/:token"
            component={ResetPassword}
          />
          <PrivateRoute exact path="/splitsheet" component={Project} />
          <PrivateRoute
            exact
            path="/dashboard/project/:id"
            component={ProjectDetails}
          />

          <Route
            exact
            path="/:id/:collaboratorId"
            component={CollaboratorView}
          />

          {/* TALENT ROUTES */}

          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/fans" component={Fans} />

          <PrivateRoute exact path="/add" component={AddTalent} />
          <PrivateRoute exact path="/edit" component={EditTalent} />

          <Route exact path="/:id" component={Talent} />

          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
