import { combineReducers, configureStore } from '@reduxjs/toolkit'
import profileReducer from './profile'
import dialogsReducer from './dialogs'
import usersReducer from './users'
import authReducer from './auth'

const rootReducer = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  users: usersReducer,
  auth: authReducer
})

export default configureStore({
  reducer: rootReducer
})