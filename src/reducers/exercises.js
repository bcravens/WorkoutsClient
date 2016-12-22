import { SET_EXERCISES } from '../actions/types'

export default function exercises(state = [], action = {}) {
  switch(action.type) {
    case SET_EXERCISES:
      return action.exercises
    default: return state
  }
}
