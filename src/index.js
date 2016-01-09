import React from 'react';
import { render } from 'react-dom';

import Root from './containers/Root.js';
import configureStore from './store/configureStore.js';

const store = configureStore();

render(
    <Root store={store} />,
     document.getElementById('app'));
