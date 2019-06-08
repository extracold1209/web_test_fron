import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import App from './components/App';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

// import AdminLayout from "layouts/Admin/Admin.jsx";
// import RTLLayout from "layouts/RTL/RTL.jsx";
import logo from './assets/img/react-logo.png';

import './assets/css/nucleo-icons.css';
import './assets/demo/demo.css';
import './assets/scss/black-dashboard-react.scss';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <div className='wrapper'>
      <Route path='/' render={(props) => <Sidebar
        logo={{
          outterLink: 'https://www.creative-tim.com/',
          text: 'Creative Tim',
          imgSrc: logo,
        }}
        toggleSidebar={() => { console.log('toggle Sidebar'); }}
        {...props} />} />
      <div className='main-panel'>
        <Header
          sidebarOpened={false}
          toggleSidebar={() => { console.log('toggleSidebar'); }}
          brandText={'Hello Header'}
        />
        <Switch>
          <Route exact={true} path='/' render={(props) => <App {...props} />} />
          {/* <Route path="/rtl" render={props => <RTLLayout {...props} />} /> */}
          {/* <Redirect from="/" to="/admin/dashboard" /> */}
        </Switch>
        <Footer />
      </div>
    </div>
  </Router>,
  document.getElementById('workspace'),
);
