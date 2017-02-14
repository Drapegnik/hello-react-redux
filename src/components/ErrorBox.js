/**
 * Created by Drapegnik on 14.02.17.
 */

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

export default class ErrorBox extends Component {

    static propTypes = {
        message: PropTypes.string.isRequired,
        handleClose: PropTypes.func.isRequired,
        error: PropTypes.any
    };

    render() {
        return (
            <div className={classnames((this.props.error ? '' : 'hide'), 'alert alert-danger')} role='alert'>
                <button type='button' className='close' onClick={::this.props.handleClose}>
                    <span aria-hidden='true'>&times;</span>
                </button>
                <strong>Error!</strong> {this.props.message}
            </div>
        );
    }
}

