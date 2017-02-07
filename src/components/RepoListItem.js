/**
 * Created by Drapegnik on 06.02.17.
 */


import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './RepoListItem.css'

export default class RepoListItem extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        starred: PropTypes.bool,
    };

    render() {
        return (
            <li className={styles.repoListItem}>
                <div className={styles.repoInfo}>
                    <div><span>{this.props.name}</span></div>
                    <div>
                        <small>{emojione.shortnameToUnicode(this.props.description)}</small>
                    </div>
                </div>
                <div className={styles.repoActions}>
                    <button className={`btn btn-default ${styles.btnAction}`}>
                        <i className={classnames('fa', {'fa-star': this.props.starred}, {'fa-star-o': !this.props.starred})}/>
                    </button>
                    <button className={`btn btn-default ${styles.btnAction}`}>
                        <i className="fa fa-code-fork"/>
                    </button>
                </div>
            </li>
        );
    }

}