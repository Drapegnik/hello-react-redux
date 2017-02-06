/**
 * Created by Drapegnik on 03.02.17.
 */

import React, { Component } from 'react';
import { UsernameInput, RepoList } from '../components';

const repos = [
    {
        id: 1,
        name: 'First',
        starred: true
    },
    {
        id: 2,
        name: 'Second',
        starred: false
    },
];

export default class App extends Component {

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <UsernameInput/>
                <RepoList repositories={repos}/>
            </div>
        );
    }
}