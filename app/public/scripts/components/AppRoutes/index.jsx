import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { browserHistory } from 'react-router';
import rootSaga from 'redux/sagas';
import { Provider } from 'react-redux';
import configureStore from 'redux/store';

import Home from 'containers/HomeContainer';

const store = configureStore();
store.runSaga(rootSaga);

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
