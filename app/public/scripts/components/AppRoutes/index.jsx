import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import store from './../../redux/store';

import Home from './../../containers/Home';

const AppRoutes = () => (
  <div>
    <Provider history={browserHistory} store={store}>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </Provider>
  </div>
);

export default AppRoutes;
