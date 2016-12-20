import { combineReducers } from 'redux'

import flashMessages from './reducers/flashMessages'
import auth from './reducers/auth'
import workouts from './reducers/workouts'

export default combineReducers({
  workouts,
  flashMessages,
  auth
})
