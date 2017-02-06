/**
 * Created by Drapegnik on 06.02.17.
 */

import React, { Component, PropTypes } from 'react';

export default class UsernameInput extends Component {

    static propTypes = {
        username: PropTypes.string.isRequired,
        getProfile: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <input type='text'
                       autoFocus='true'
                       placeholder='Type the github nickname'
                       value={this.state.username}
                       onChange={::this.handleChange}/>
                <button onClick={::this.handleSubmit}>Load repos!</button>
            </div>
        );
    }

    constructor(props, context) {
        super(props, context);
        this.state = {username: this.props.username || ''};
    }

    handleChange(event) {
        this.setState({username: event.target.value});
    }

    handleSubmit() {
        if (this.state.username == '') {
            alert('you should input username!');
            return;
        }
        this.props.getProfile(this.state.username);
        this.setState({username: ''});
    }
}