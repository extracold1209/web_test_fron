import App from '@components/App';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Sidebar from '@components/Sidebar';
import Reducer from '@store/modules';
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { createStore } from 'redux';

// import AdminLayout from "layouts/Admin/Admin.jsx";
// import RTLLayout from "layouts/RTL/RTL.jsx";

import '@assets/css/nucleo-icons.css';
import '@assets/scss/black-dashboard-react.scss';

const hist = createBrowserHistory();
const store = createStore(Reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <div className='wrapper'>
        <Route path='/' render={(props) => <Sidebar
          {...props} />} />
        <div className='main-panel'>
          <Header />
          <Switch>
            <Route exact={true} path='/' render={(props) => <App {...props} />} />
            {/* <Route path="/rtl" render={props => <RTLLayout {...props} />} /> */}
            {/* <Redirect from="/" to="/admin/dashboard" /> */}
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  </Provider>,
  document.getElementById('workspace'),
);
