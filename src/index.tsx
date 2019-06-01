import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import App from './components/App';
import Footer from './components/Footer';
import Header from './components/Header';

// import AdminLayout from "layouts/Admin/Admin.jsx";
// import RTLLayout from "layouts/RTL/RTL.jsx";

import './assets/css/nucleo-icons.css';
import './assets/demo/demo.css';
import './assets/scss/black-dashboard-react.scss';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact={true} path='/' render={(props) => <App {...props} />} />
      <Route exact={true} path='/header' render={(props) => <Header {...props}/>} />
      {/* <Route path="/rtl" render={props => <RTLLayout {...props} />} /> */}
      {/* <Redirect from="/" to="/admin/dashboard" /> */}
    </Switch>
    <Footer />
  </Router>,
  document.getElementById('workspace'),
);
