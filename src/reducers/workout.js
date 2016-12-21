import { SET_WORKOUT } from '../actions/types'

export default function workout(state = [], action = {}) {
  switch(action.type) {
    case SET_WORKOUT:
      return action.workout
    default: return state
  }
}
