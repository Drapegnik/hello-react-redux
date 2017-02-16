/**
 * Created by Drapegnik on 03.02.17.
 */

import { combineReducers } from 'redux';
import profile from './profile';
import user from './user';

const rootReducer = combineReducers({
  user,
  profile,
});

export default rootReducer;
