/**
 * Created by Drapegnik on 06.02.17.
 */


import React, { Component, PropTypes } from 'react';

export default class RepoListItem extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        starred: PropTypes.bool,
    };

    render() {
        return (
            <li>
                <div>
                    <span>{this.props.name}</span>
                </div>
                <div>
                    <button>Star repo</button>
                </div>
            </li>
        );
    }

}