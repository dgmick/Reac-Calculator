import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculate from "./Calculate";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Application Test</h2>
                </div>
                <Calculate/>
            </div>
        );
    }
}

export default App;
