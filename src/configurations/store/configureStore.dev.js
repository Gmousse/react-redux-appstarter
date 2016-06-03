import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import store from '../../reducers';
import DevTools from '../../containers/DevTools.jsx';

const loggerMiddleware = createLogger();

const finalCreateStore = compose(
  applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
  ),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
    const globalStore = finalCreateStore(store, initialState);

    if (module.hot) {
        module.hot.accept('../../reducers', () =>
            globalStore.replaceReducer(require('../../reducers'))
        );
    }

    return globalStore;
}
