import axios from 'axios'
import { SET_WORKOUTS } from './types'
import { SET_WORKOUT } from './types'

export function setWorkouts(workouts) {
  return {
    type: SET_WORKOUTS,
    workouts
  }
}

export function getWorkouts(identifier) {
  return dispatch => {
    return axios.get(`/api/workouts/${identifier}`)
      .then( res => dispatch(setWorkouts(res.data.workouts)))
  }
}

export function createWorkout(workout) {
  return dispatch => {
    return axios.post('/api/workouts', workout)
  }
}

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
