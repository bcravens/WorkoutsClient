import { SET_WORKOUTS } from '../actions/types'

const initialState = []

export default function workouts(state = initialState, action = {}) {
  switch(action.type) {
    case SET_WORKOUTS:
      return action.workouts
    default: return state
  }
}
