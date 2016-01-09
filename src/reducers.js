import { combineReducers } from 'redux';
import React from 'react';
import { HANDLE_SEARCH, HANDLE_RESET, WAITING_VIGNETTES, RECEIVING_VIGNETTES,
     FILTER_VIGNETTES, DISPLAY_DOCUMENT, DOWNLOAD_DOCUMENT } from './actions.js';

// Utils

function textToTags(text) {
    const tags = new Set();
    text.split(new RegExp('[ ,;]', 'g')).forEach((tag) => {
        if (tag.length > 1) {
            tags.add(tag);
        }
    });
    return Array.from(tags);
}

function filterArrayByWords(arrayToFilter, filters) {
    const filteredArray = new Set();
    for (const filter of filters) {
        filteredArray.add(arrayToFilter.find((element) => element.includes(filter)));
    }
    filteredArray.delete(undefined);
    return Array.from(filteredArray);
}

// Initial States

const searchInitialState = {
    text: '',
    tagsList: [],
};

const vignettesInitialState = {
    list: [],
    listToDisplay: [],
};

const documentToDisplayInitialState = {
    content: undefined,
};

// Stores

export default function search(state = searchInitialState, action) {
    switch (action.type) {
    case HANDLE_SEARCH:
        return Object.assign({}, state, {
            text: action.newSearchText,
            tagsList: textToTags(action.newSearchText),
        });
    case HANDLE_RESET:
        return searchInitialState;
    default:
        return state;
    }
}

export default function vignettes(state = vignettesInitialState, action) {
    switch (action.type) {
    case WAITING_VIGNETTES:
        return state;
    case RECEIVING_VIGNETTES:
        return Object.assign({}, state, {
            list: action.vignettesList,
        });
    case FILTER_VIGNETTES:
        return Object.assign({}, state, {
            listToDisplay: filterArrayByWords(state.list, action.filters),
        });
    default:
        return state;
    }
}

export default function documentToDisplay(state = documentToDisplayInitialState, action) {
    switch (action.type) {
    case DISPLAY_DOCUMENT:
        return Object.assign({}, state, {
            content: <object data={action.apiRequest}/>,
        });
    case DOWNLOAD_DOCUMENT:
        return Object.assign({}, state, {
            content: <a href={action.apiRequest} download/>,
        });
    default:
        return state;
    }
}

const store = combineReducers({
    search,
    vignettes,
    documentToDisplay,
});

export default store;
