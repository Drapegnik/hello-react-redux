/**
 * Created by Drapegnik on 06.02.17.
 */


import { GET_PROFILE, CLEAR_PROFILE } from '../actions/constants';

const initialState = {
    username: '',
    repositories: [],
    fetching: false,
    error: false,
    message: ''
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE:
            const {username, repositories, fetching, error} = action;

            if (error) {
                return {...state, fetching, error, message: action.payload.message};
            }

            return {...state, username, repositories, fetching, error};
        case CLEAR_PROFILE:
            return initialState;
        default:
            return state;
    }
}