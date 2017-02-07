/**
 * Created by Drapegnik on 03.02.17.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import Profile from '../components/Profile';
import styles from './App.css';

@connect(
    state => ({
        user: state.user,
        profile: state.profile
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    }))
export default class App extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired,
        profile: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    };

    render() {
        return (
            <div className={styles.app}>
                <h2>Hello world, {this.props.user.name}!</h2>
                <Profile data={this.props.profile} actions={this.props.actions}/>
            </div>
        );
    }
}