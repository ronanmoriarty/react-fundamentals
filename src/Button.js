import React, { Component } from 'react';

class Button extends Component {
    state = { counter: 10 };

    render() {
        return (
            <button>{this.state.counter}</button>
        );
    }
}

export default Button;