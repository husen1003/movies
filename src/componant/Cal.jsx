import React, { Component } from 'react'

export default class Cal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tmp: this.props.number,
        }
    }

    render() {
        return (
            <>
                <h2>Login Page</h2>
                <h1>{this.state.tmp}</h1>
                <button onClick={() => {
                    this.setState({ tmp: this.state.tmp + 1 });
                    console.log(this.state.tmp)
                }}>Increment</button>
            </>
        )
    }
}
