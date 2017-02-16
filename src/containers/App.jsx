/**
 * Created by Drapegnik on 03.02.17.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import Profile from '../components/Profile';
import styles from './App.css';

function App(props) {
  return (
    <div className={styles.app} >
      <h2>Hello world, {props.user.name}!</h2>
      <Profile data={props.profile} actions={props.actions} />
    </div>
  );
}

App.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    login: PropTypes.bool,
  }).isRequired,
  profile: PropTypes.shape({
    username: PropTypes.string,
    repositories: PropTypes.array,
    fetching: PropTypes.bool,
    error: PropTypes.bool,
    message: PropTypes.string,
  }).isRequired,
  actions: PropTypes.shape({
    login: PropTypes.func.isRequired,
    getProfile: PropTypes.func.isRequired,
    clearProfile: PropTypes.func.isRequired,
    starRepo: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(state => ({
  user: state.user,
  profile: state.profile,
}), dispatch => ({
  actions: bindActionCreators(actions, dispatch),
}))(App);
