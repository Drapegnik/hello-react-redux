/**
 * Created by Drapegnik on 03.02.17.
 */

import { STAR_REPO } from './constants';

export default function starRepo(id) {
    return {
        type: STAR_REPO,
        id
    };
}