import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './../../redux/store';

import Home from './../../containers/HomeContainer';
import Contact from './../../containers/ContactContainer';

const AppRoutes = () => (
  <div>
    <Provider history={browserHistory} store={store}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
      </Router>
    </Provider>
  </div>
);

export default AppRoutes;
