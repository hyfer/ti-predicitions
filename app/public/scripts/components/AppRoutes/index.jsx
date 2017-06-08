import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from 'redux/store';

import Home from 'containers/HomeContainer';

const AppRoutes = () => (
  <div>
    <Provider history={browserHistory} store={store}>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    </Provider>
  </div>
);

export default AppRoutes;
