import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import './App.css';

// Here's where the issue lays. Calling this function without passing any parameter
// makes a call to Object.keys(undefined)
// Change `parameters` to `(parameters = {})` to avoid the bug
const advancedSearchToRestApi = parameters => (
  Object.keys(parameters).reduce((result, key) => result.push(key), [])
);

class App extends Component {
  state = {
    name: 'issue7445',
  };

  render() {
    const { name } = this.state;
    advancedSearchToRestApi();
    return (
      <div className="App">
        <h1>
          Welcome to
          {name}
        </h1>
      </div>
    );
  }
}

export default hot(module)(App);
