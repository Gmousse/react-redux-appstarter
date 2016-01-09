import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import store from '../reducers.js';
const loggerMiddleware = createLogger();

const finalCreateStore = compose(
  applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
  )
)(createStore);

export default function configureStore(initialState) {
    return finalCreateStore(store, initialState);
}
