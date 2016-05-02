'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ACTION_TYPE = undefined;
exports.callYourAction = callYourAction;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ACTION_TYPE = exports.ACTION_TYPE = 'ACTION_TYPE';

function callYourAction() {
    return {
        type: ACTION_TYPE
    };
}