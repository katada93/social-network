import { combineReducers, configureStore } from '@reduxjs/toolkit';
import profileReducer from './profile';
import dialogsReducer from './dialogs';
import usersReducer from './users';
import authReducer from './auth';
import appReducer from './app';

const rootReducer = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  users: usersReducer,
  auth: authReducer,
  app: appReducer,
});

export default configureStore({
  reducer: rootReducer,
});
