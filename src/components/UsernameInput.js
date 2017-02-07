/**
 * Created by Drapegnik on 06.02.17.
 */

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './UsernameInput.css';

export default class UsernameInput extends Component {

    static propTypes = {
        username: PropTypes.string.isRequired,
        getProfile: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <div className='input-group'>
                    <span className={classnames('input-group-addon', styles.bgColor)}>@</span>
                    <input type='text'
                           autoFocus='true'
                           className={classnames('form-control', styles.input)}
                           placeholder='Type the github nickname'
                           value={this.state.username}
                           onChange={::this.handleChange}
                           onKeyDown={::this.handleSubmit}/>
                    <span className='input-group-btn'>
                        <button name='submit'
                                onClick={::this.handleSubmit}
                                className={classnames('btn btn-default', styles.bgColor)}>
                            Go!
                        </button>
                    </span>
                </div>
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

    handleSubmit(event) {
        if (event.keyCode !== 13 && event.target.name !== 'submit') {
            return;
        }
        if (this.state.username == '') {
            alert('you should input username!');
            return;
        }
        this.props.getProfile(this.state.username);
        this.setState({username: ''});
    }
}