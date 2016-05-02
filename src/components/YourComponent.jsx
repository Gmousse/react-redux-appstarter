import React, { Component } from 'react';

try {
    require('../css/main.css');
} catch (error) {
    console.log('can\'t import css.');
}

export default class YourComponent extends Component {

    render() {
        return (
            <header>
                Hello World
            </header>
        );
    }
}
