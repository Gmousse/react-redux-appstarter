import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from '../configurations/store/configureStore.js';
import DevTools from './devTools.jsx';
import Routes from './routes.jsx';

const store = configureStore();

render(
    <Provider store={store}>
        <div>
            {process.env.NODE_ENV !== 'production' ? <DevTools /> : ''}
            <Routes store={store} />
        </div>
    </Provider>,
    document.getElementById('app') // eslint-disable-line no-undef
);
