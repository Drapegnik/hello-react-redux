/**
 * Created by Drapegnik on 06.02.17.
 */

import React, { Component, PropTypes } from 'react';
import { UsernameInput, RepoList } from '../components';

export default class Profile extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    };

    render() {
        const {username, repositories} = this.props.data;

        return (
            <div>
                <UsernameInput username={username} getProfile={this.props.actions.getProfile}/>
                <h4 className={username ? '' : 'hide'}>Repositories for {username}:</h4>
                <RepoList repositories={repositories}/>
            </div>
        );
    }
}

