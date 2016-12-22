import axios from 'axios'
import { SET_EXERCISES } from './types'

export function setExercises(exercises) {
  return {
    type: SET_EXERCISES,
    exercises
  }
}

export function getExercises(workout_id) {
  return dispatch => {
    return axios.get(`/api/exercises/${workout_id}`)
      .then( res => dispatch(setExercises(res.data.exercises)))
  }
}

export function createExercise(exercise) {
  return dispatch => {
    return axios.post('/api/exercises', exercise)
  }
}
