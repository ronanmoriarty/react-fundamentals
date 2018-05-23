import React, { Component } from 'react';

class Button extends Component {
    state = { counter: 10 };

    handleClick = () => {
        this.setState((previousState) => ({
            counter: previousState.counter + 1
        }));
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.counter}
            </button>
        );
    }
}

export default Button;