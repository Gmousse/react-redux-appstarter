'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = yourState;

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _actions = require('./actions.js');

var yourInitialState = {
    test: ''
};

function yourState() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? yourInitialState : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case _actions.ACTION_TYPE:
            return Object.assign({}, state, {
                test: 'Hello World'
            });
        default:
            return state;
    }
}

var store = (0, _redux.combineReducers)({
    yourState: yourState,
    routing: _reactRouterRedux.routerReducer
});

exports.default = store;