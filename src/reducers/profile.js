/**
 * Created by Drapegnik on 06.02.17.
 */


import { GET_PROFILE } from '../actions/constants';

const initialState = {
    username: '',
    repositories: []
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE:
            return {...state, username: action.username, repositories: action.repositories};
        default:
            return state;
    }
}