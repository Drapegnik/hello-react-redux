/**
 * Created by Drapegnik on 06.02.17.
 */

import React, { Component, PropTypes } from 'react';
import { UsernameInput, RepoList, ProgressBar, ErrorBox } from '../components';

export default class Profile extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    };

    render() {
        const {username, repositories, fetching, error, message} = this.props.data;

        return (
            <div>
                <UsernameInput username={username} getProfile={this.props.actions.getProfile}/>
                <ProgressBar show={fetching}/>
                <h4 className={repositories.length ? '' : 'hide'}>Repositories for {username}:</h4>
                <ErrorBox error={error} message={message} handleClose={this.props.actions.clearProfile}/>
                <RepoList repositories={repositories}/>
            </div>
        );
    }
}

