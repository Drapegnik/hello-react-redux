/**
 * Created by Drapegnik on 03.02.17.
 */

import { GET_PROFILE } from './constants';

export default function getProfile(username) {
    return {
        type: GET_PROFILE,
        username
    };
}