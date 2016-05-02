'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _DevTools = require('../containers/DevTools.jsx');

var _DevTools2 = _interopRequireDefault(_DevTools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loggerMiddleware = (0, _reduxLogger2.default)();

var finalCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, loggerMiddleware), _DevTools2.default.instrument())(_redux.createStore);

function configureStore(initialState) {
    var globalStore = finalCreateStore(_reducers2.default, initialState);

    if (module.hot) {
        module.hot.accept('../reducers', function () {
            return globalStore.replaceReducer(require('../reducers'));
        });
    }

    return globalStore;
}