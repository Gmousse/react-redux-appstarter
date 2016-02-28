import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import store from '../reducers.js';

const finalCreateStore = compose(
  applyMiddleware(
        thunkMiddleware,
  )
)(createStore);

export default function configureStore(initialState) {
    return finalCreateStore(store, initialState);
}
