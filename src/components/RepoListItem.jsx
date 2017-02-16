/**
 * Created by Drapegnik on 06.02.17.
 */

import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './RepoListItem.css';

export default function RepoListItem(props) {
  return (
    <li key={props.id} className={styles.repoListItem} >
      <div className={styles.repoInfo} >
        <div><a href={props.url} ><span>{props.name}</span></a></div>
        <div className={styles.description} >
          <small>{emojione.shortnameToUnicode(props.description)}</small>
        </div>
      </div>
      <div className={styles.repoActions} >
        <button className={`btn btn-default ${styles.btnAction}`} >
          <i className={classnames('fa', { 'fa-star': props.starred }, { 'fa-star-o': !props.starred })} />
        </button>
        <button className={`btn btn-default ${styles.btnAction}`} >
          <i className="fa fa-code-fork" />
        </button>
      </div>
    </li>
  );
}

RepoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  starred: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
};
