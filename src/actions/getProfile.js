/**
 * Created by Drapegnik on 03.02.17.
 */

import { GET_PROFILE } from './constants';
import fetch from 'isomorphic-fetch';

export default function getProfile(username) {
    return (dispatch) => {
        dispatch({
            type: GET_PROFILE,
            repositories: [],
            fetching: true,
            username
        });

        fetch(`https://api.github.com/users/${username}/repos`)
            .then(response => response.json())
            .then(response => {
                if (response.message) {
                    throw new Error(response.message);
                }
                return response;
            })
            .then(response => response.map(repo => {
                const {id, name, description, url} = repo;
                return {id, name, description, url}
            }))
            .then(data => {
                if (!data.length) {
                    throw new Error('Not found');
                }
                return data;
            })
            .then(data => dispatch({
                type: GET_PROFILE,
                repositories: data,
                fetching: false,
                username
            }))
            .catch(error => dispatch({
                type: GET_PROFILE,
                payload: error,
                fetching: false,
                error: true
            }));
    }
}