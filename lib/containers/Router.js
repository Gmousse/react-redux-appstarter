'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.route = route;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouterRedux = require('react-router-redux');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _YourComponent = require('../components/YourComponent.jsx');

var _YourComponent2 = _interopRequireDefault(_YourComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function route(store) {
    var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

    return _react2.default.createElement(
        _reactRouter.Router,
        { history: history },
        _react2.default.createElement(
            _reactRouter.Route,
            { path: '/', component: _App2.default },
            _react2.default.createElement(_reactRouter.IndexRoute, { component: _YourComponent2.default })
        )
    );
}