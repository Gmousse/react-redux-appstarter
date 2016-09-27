import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { ACTION_TYPE } from './actions.js';

const yourInitialState = {
    test: '',
};

function yourState(state = yourInitialState, action) {
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
    routing: routerReducer,
});

export default store;
