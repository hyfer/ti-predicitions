import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import thunk from 'redux-thunk';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(thunk, sagaMiddleware);
const enhancers = [middleware];

const configureStore = () => {
  const store = createStore(
    combineReducers({
      ...reducers,
    }),
    compose(
      ...enhancers,
    ),
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
};

export default configureStore;
