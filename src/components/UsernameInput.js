/**
 * Created by Drapegnik on 06.02.17.
 */

import React, { Component } from 'react';

export default class UsernameInput extends Component {

    render() {
        return (
            <input type='text'
                   autoFocus='true'
                   placeholder='Type the github nickname'
                   value={this.state.name}
                   onChange={::this.handleChange}/>
        );
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            username: this.props.username || '',
        };
    }

    handleChange(e) {
        this.setState({username: e.target.value});
    }
}