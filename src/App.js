import React, { Component } from 'react';
import './App.css';

import Persons from './containers/Persons/Persons';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>Toggle to add Persons</h2>
                <Persons />
            </div>
        );
    }
}

export default App;
