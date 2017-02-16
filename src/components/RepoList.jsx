/**
 * Created by Drapegnik on 06.02.17.
 */

import React, { PropTypes } from 'react';
import RepoListItem from './RepoListItem';
import styles from './RepoList.css';

export default function RepoList(props) {
  return (
    <ul className={styles.repoList} >
      {
        props.repositories.map(repo => (<RepoListItem
          key={repo.id}
          id={repo.id}
          name={repo.name}
          description={repo.description || ''}
          starred={repo.starred || false}
          url={repo.url}
        />))
      }
    </ul>
  );
}

RepoList.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};
