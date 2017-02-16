/**
 * Created by Drapegnik on 03.02.17.
 */

import { LOGIN } from './constants';

export default function login(id) {
  return {
    type: LOGIN,
    id,
  };
}
