import React, { Component } from 'react';
import { connect } from 'react-redux';
import { callYourAction } from '../actions.js';

import '../css/main.css';

class App extends Component {

    render() {
        const { dispatch, yourState } = this.props;
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

function stateToProps(state) {
    return {
        yourState: state.yourState,
    };
}

export default connect(stateToProps)(App);
