/**
 * Created by Drapegnik on 14.02.17.
 */

import React, { Component, PropTypes } from 'react';

export default class ProgressBar extends Component {

    static propTypes = {
        show: PropTypes.bool.isRequired
    };

    render() {
        return (
            <div className={this.props.show ? '' : 'hide'}>
                <div className="progress">
                    <div className="progress-bar progress-bar-info progress-bar-striped active"
                         role="progressbar" style={{width: '100%'}}>
                        <span>Data loading</span>
                    </div>
                </div>
            </div>
        );
    }
}

