import { createStore, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
import reducers from './reducers';

// const middleware = applyMiddleware(thunk);

const store = createStore(
  combineReducers({
    ...reducers,
  }),
);

export default store;
