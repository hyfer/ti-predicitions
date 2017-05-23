import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const store = createStore(reducer, middleware);

export default store;
