import React from 'react'
import { connect } from 'react-redux'
import { getWorkout } from '../../actions/workoutActions'
import { getExercises } from '../../actions/exerciseActions'
import { addFlashMessage } from '../../actions/flashMessages.js'
import WorkoutHeader from './WorkoutHeader'
import ExerciseList from '../exercises/ExerciseList'
import ExerciseForm from '../exercises/NewExerciseForm'


class WorkoutPage extends React.Component {
  componentDidMount() {
    this.props.getWorkout(this.props.user.id, this.props.params.workout)
    this.props.getExercises(this.props.params.workout)
  }
  componentDidUpdate() {
    this.props.getExercises(this.props.params.workout)
  }

  render() {
    const { addFlashMessage, user, workout } = this.props
    return (
      <div>
          <WorkoutHeader workout={this.props.workout} />
          <ExerciseForm
            addFlashMessage={addFlashMessage}
            user={this.props.user}
            workout={this.props.params.workout} />
          <ExerciseList exercises={this.props.exercises} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    workout: state.workout,
    exercises: state.exercises,
    user: state.auth.user
  }
}

export default connect(mapStateToProps, { getWorkout, getExercises,  addFlashMessage })(WorkoutPage)
