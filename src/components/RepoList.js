/**
 * Created by Drapegnik on 06.02.17.
 */

import React, { Component, PropTypes } from 'react';
import RepoListItem from './RepoListItem';

export default class RepoList extends Component {
    static propTypes = {
        repositories: PropTypes.array.isRequired
    };

    render() {
        return (
            <ul>
                {
                    this.props.repositories.map(repo => {
                        return (<RepoListItem
                            key={repo.id}
                            id={repo.id}
                            name={repo.name}
                            starred={repo.starred}/>);
                    })
                }
            </ul>
        );
    }

}