import {combineReducers} from 'redux';
import userReducer from './reducer-users';

// contains all the user object
const allReducers = combineReducers({
  user: userReducer // user is equal now to the list of users
});

export default allReducers;