import { createStore, combineReducers, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(
  combineReducers({
    ...reducers,
  }),
  applyMiddleware(thunk, apiMiddleware),
);

export default store;
