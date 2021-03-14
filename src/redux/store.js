import { combineReducers, configureStore } from '@reduxjs/toolkit'
import profileReducer from './profile'
import dialogsReducer from './dialogs'

const rootReducer = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer
})

export default configureStore({
  reducer: rootReducer
})