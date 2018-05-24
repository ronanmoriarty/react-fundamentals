import React, { Component } from 'react';
import Button from './Button.js';
import Result from './Result.js';

class AppIntro extends Component {
  state = {
    counter: 10
  };

  incrementCounter = (incrementValue) => {
    this.setState((previousState) => ({
      counter: previousState.counter + incrementValue
    }));
  };

  render() {
    return (
      <div>
        <Button onClickFunction={this.incrementCounter} incrementValue={1} />
        <Button onClickFunction={this.incrementCounter} incrementValue={5} />
        <Button onClickFunction={this.incrementCounter} incrementValue={10} />
        <Button onClickFunction={this.incrementCounter} incrementValue={100} />
        <Result counter={this.state.counter} />
      </div>
    );
  }
}

export default AppIntro;
