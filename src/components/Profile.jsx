/**
 * Created by Drapegnik on 06.02.17.
 */

import React, { PropTypes } from 'react';
import { UsernameInput, RepoList, ProgressBar, ErrorBox } from '../components';

export default function Profile(props) {
  const { username, repositories, fetching, error, message } = props.data;

  return (
    <div>
      <UsernameInput username={username} getProfile={props.actions.getProfile} />
      <ProgressBar show={fetching} />
      <h4 className={repositories.length ? '' : 'hide'} >Repositories for {username}:</h4>
      <ErrorBox error={error} message={message} handleClose={props.actions.clearProfile} />
      <RepoList repositories={repositories} />
    </div>
  );
}

Profile.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    repositories: PropTypes.array,
    fetching: PropTypes.bool,
    error: PropTypes.bool,
    message: PropTypes.string,
  }).isRequired,
  actions: PropTypes.shape({
    getProfile: PropTypes.func.isRequired,
    clearProfile: PropTypes.func.isRequired,
  }).isRequired,
};
