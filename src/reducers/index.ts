import { combineReducers } from 'redux';

import { auth } from './auth';
import { nav } from './nav';

const rootReducer = combineReducers({
  authState: auth,
  navState: nav,
});

export default rootReducer;
