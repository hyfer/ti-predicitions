import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import store from './../../redux/store';

import Home from './../../containers/Home.js';

export default class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Provider history={browserHistory} store={store}>
          <Router>
                <Route exact path="/" component={Home} />
          </Router>
        </Provider>
      </div>
    );
  }
}
