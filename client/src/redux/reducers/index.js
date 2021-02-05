import { combineReducers } from 'redux';
import user from './auth';
import product from './product';

export default combineReducers({
  user,
  product
}) 