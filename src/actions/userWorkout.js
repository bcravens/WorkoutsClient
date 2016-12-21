import axios from 'axios'
import { SET_WORKOUT } from './types'

export function setWorkout(workout) {
  return {
    type: SET_WORKOUT,
    workout
  }
}

export function getWorkout(identifier, workout) {
  return dispatch => {
    return axios.get(`/api/workout/${identifier}/${workout}`)
      .then( res => dispatch(setWorkout(res.data.workout)))
  }
}
