/**
 * Created by Drapegnik on 03.02.17.
 */

import { GET_PROFILE } from './constants';
import fetch from 'isomorphic-fetch';

export default function getProfile(username) {
    return dispatch => {
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(response => response.json())
            .then(response => {
                return response.map(repo => {
                    const {id, name, description} = repo;
                    return {id, name, description}
                })
            })
            .then(data => {
                return dispatch({
                    type: GET_PROFILE,
                    repositories: data,
                    username
                });
            })
            .catch(error => {
                console.error(error);

                return dispatch({
                    type: GET_PROFILE,
                    payload: error,
                    error: true
                });
            });
    }
}