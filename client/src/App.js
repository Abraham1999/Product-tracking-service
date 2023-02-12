import React, { useEffect } from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import store from './redux/store/store';
import { loadUser } from './redux/actions/auth';
import setAuthToken from './utils/setAuthToken';
import { createBrowserHistory } from 'history';
import Landing from './pages/Landing/Landing';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/Admin/Dashboard';
import New from './pages/Admin/New';
import Edit from './pages/Admin/Edit';
import Delete from './pages/Admin/Delete';
import All from './pages/Admin/All';

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
    <div className='App'>
      <Router history={hist}>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/login-page' component={Login} />
          <Route exact path='/register-page' component={Register} />

          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute exact path='/add' component={New} />
          <PrivateRoute exact path='/edit/:id' component={Edit} />
          <PrivateRoute exact path='/all' component={All} />
          <PrivateRoute exact path='/delete' component={Delete} />

          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
