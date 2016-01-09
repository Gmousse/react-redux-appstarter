import { combineReducers } from 'redux';
import React from 'react';
import { ACTION_TYPE } from './actions.js';

// Initial States

const yourInitialState = {
    test: '',
};

// Stores

export default function yourState(state = yourInitialState, action) {
    switch (action.type) {
    case ACTION_TYPE:
        return Object.assign({}, state, {
            test: 'Hello World',
        });
    default:
        return state;
    }
}

const store = combineReducers({
    yourState,
});

export default store;
