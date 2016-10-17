import React, { Component, PropTypes } from 'react';

try {
    /* eslint-disable global-require */
    require('../css/main.css');
    /* eslint-enable */
} catch (error) {
    console.log('can\'t import css.');
}

export default class YourComponent extends Component {

    render() {
        return (
            <header style={{color: this.props.color}}>
                Hello World
            </header>
        );
    }
}

YourComponent.defaultProps = {
    color: 'black',
};

YourComponent.propTypes = {
    color: PropTypes.string,
};
