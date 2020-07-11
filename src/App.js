import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AutoCompleteText from './AutoCompleteText.js';
import names from './names';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className ="App-component">
          <div className ="App-component">
            <h1>Welcome to the Autocomplete Text</h1>
            <AutoCompleteText items ={names}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
