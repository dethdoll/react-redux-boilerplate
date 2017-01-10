import {combineReducers} from 'redux';
import userReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';

// contains all the user object
const allReducers = combineReducers({
  users: userReducer, // users is equal now to the list of users
  activeUser: ActiveUserReducer
});

export default allReducers;