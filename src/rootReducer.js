import { combineReducers } from 'redux'

import flashMessages from './reducers/flashMessages'
import auth from './reducers/auth'
import workouts from './reducers/workouts'
import workout from './reducers/workout'
import exercises from './reducers/exercises'

export default combineReducers({
  workout,
  workouts,
  flashMessages,
  auth,
  exercises
})
