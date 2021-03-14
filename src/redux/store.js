import { combineReducers, configureStore } from '@reduxjs/toolkit'
import profileReducer from './profile'
import dialogsReducer from './dialogs'
import usersReducer from './users'

const rootReducer = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  users: usersReducer
})

export default configureStore({
  reducer: rootReducer
})