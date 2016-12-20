import { SET_WORKOUTS } from '../actions/types'

export default function workouts(state = [], action = {}) {
  switch(action.type) {
    case SET_WORKOUTS:
      return action.workouts
    default: return state
  }
}
