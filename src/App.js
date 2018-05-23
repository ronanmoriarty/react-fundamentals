import React, { Component } from 'react';
import Button from './Button.js';
import Result from './Result.js';

class App extends Component {
  state = { counter: 10 };

  incrementCounter = () => {
    this.setState((previousState) => ({
      counter: previousState.counter + 1
    }));
  };

  render() {
    return (
      <div>
        <Button onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter} />
      </div>
    );
  }
}

export default App;
