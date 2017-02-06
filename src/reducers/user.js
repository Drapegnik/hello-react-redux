/**
 * Created by Drapegnik on 06.02.17.
 */

import { LOGIN } from '../actions/constants';

const initialState = {
    login: false,
    name: 'anonymous'
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, login: true, id: action.id};
        default:
            return state;
    }
}
