import { combineReducers } from 'redux';
import user from './auth';
import project from './project';

export default combineReducers({
  user,
  project
}) 