import React, { Component } from 'react';
import { connect } from 'react-redux';
import { callYourAction } from '../actions.js';
import YourComponent from '../components/YourComponent.jsx';

import '../css/main.css';

class App extends Component {

    render() {
        const { dispatch, yourState } = this.props;
        return (
            <div>
                <YourComponent />
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
