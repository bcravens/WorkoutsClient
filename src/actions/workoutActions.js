import axios from 'axios'
import { SET_WORKOUTS } from './types'
import { SET_WORKOUT } from './types'

export function setWorkouts(workouts) {
  return {
    type: SET_WORKOUTS,
    workouts
  }
}

export function getWorkouts(user_id) {
  return dispatch => {
    return axios.get(`/api/workouts/${user_id}`)
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

export function getWorkout(user_id, workout_id) {
  return dispatch => {
    return axios.get(`/api/workout/${user_id}/${workout_id}`)
      .then( res => dispatch(setWorkout(res.data.workout)))
  }
}
