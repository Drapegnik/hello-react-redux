/**
 * Created by Drapegnik on 03.02.17.
 */

import React, { Component, PropTypes } from 'react';
import { UsernameInput, RepoList } from '../components';
import { connect } from 'react-redux';

@connect(state => ({
    user: state.user,
    profile: state.profile
}))
export default class App extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired,
        profile: PropTypes.object.isRequired
    };

    render() {
        return (
            <div>
                <h1>Hello world, {this.props.user.name}!</h1>
                <p>Repositories for: {this.props.profile.username}</p>
                <UsernameInput/>
                <RepoList repositories={this.props.profile.repositories}/>
            </div>
        );
    }
}