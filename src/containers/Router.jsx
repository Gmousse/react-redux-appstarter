import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './App';
import YourComponent from '../components/YourComponent.jsx';

export function route(store) {
    const history = syncHistoryWithStore(browserHistory, store);

    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={YourComponent} />
            </Route>
        </Router>
    );
}
