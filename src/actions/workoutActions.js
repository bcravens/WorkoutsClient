import axios from 'axios'
import { SET_WORKOUTS } from './types'

export function setWorkouts(workouts) {
  return {
    type: SET_WORKOUTS,
    workouts
  }
}

export function getWorkouts() {
  return dispatch => {
    return axios.get('/api/workouts/workouts')
      .then( res => dispatch(setWorkouts(res.data.workouts)))
  }
}

export function createWorkout(workout) {
  return dispatch => {
    return axios.post('/api/workouts', workout)
  }
}
