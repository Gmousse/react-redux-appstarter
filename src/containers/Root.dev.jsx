import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { route } from './Router.jsx';
import DevTools from './DevTools.jsx';

export default class Root extends Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <div>
                    {route(store)}
                    <DevTools/>
                </div>
            </Provider>
        );
    }
}
