/**
 * Created by Drapegnik on 06.02.17.
 */

import React, { Component, PropTypes } from 'react';
import RepoListItem from './RepoListItem';
import styles from './RepoList.css';

export default class RepoList extends Component {
    static propTypes = {
        repositories: PropTypes.array.isRequired
    };

    render() {
        return (
            <ul className={styles.repoList}>
                {this.props.repositories.map(repo => {
                    return (<RepoListItem
                        key={repo.id}
                        id={repo.id}
                        name={repo.name}
                        description={repo.description || ''}
                        starred={repo.starred}/>);
                })}
            </ul>
        );
    }

}