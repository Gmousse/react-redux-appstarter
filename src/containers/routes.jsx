import React, { PropTypes } from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from '../components/app.jsx';
import YourComponent from '../components/yourComponent.jsx';

function Routes(props) {
    const history = syncHistoryWithStore(browserHistory, props.store);

    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={YourComponent} />
            </Route>
        </Router>
    );
}

Routes.propTypes = {
    store: PropTypes.object,
};

export default Routes;
