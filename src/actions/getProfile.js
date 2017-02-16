/**
 * Created by Drapegnik on 03.02.17.
 */

import fetch from 'isomorphic-fetch';
import { GET_PROFILE } from './constants';

export default function getProfile(username) {
  const defaultState = {
    type: GET_PROFILE,
    repositories: [],
    fetching: false,
    error: false,
    username,
  };

  return (dispatch) => {
    dispatch({ ...defaultState, fetching: true });

    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then((response) => {
        if (response.message) {
          throw new Error(response.message);
        }

        return response;
      })
      .then(response => response.map((repo) => {
        const { id, name, description, url } = repo;
        return { id, name, description, url };
      }))
      .then((data) => {
        if (!data.length) {
          throw new Error('Not found');
        }

        return data;
      })
      .then(data => dispatch({ ...defaultState, repositories: data }))
      .catch(error => dispatch({ ...defaultState, error: true, payload: error }));
  };
}
