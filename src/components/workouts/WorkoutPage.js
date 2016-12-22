import React from 'react'
import { connect } from 'react-redux'
import { getWorkout } from '../../actions/workoutActions'
import { getExercises } from '../../actions/exerciseActions'
import WorkoutHeader from './WorkoutHeader'

class WorkoutPage extends React.Component {
  componentDidMount() {
    this.props.getWorkout(this.props.user.id, this.props.params.workout)
    this.props.getExercises(this.props.params.workout)
  }

  render() {
    console.log(this.props.workout)
    return (
      <div>
          <WorkoutHeader workout={this.props.workout} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    workout: state.workout,
    user: state.auth.user
  }
}

export default connect(mapStateToProps, { getWorkout, getExercises })(WorkoutPage)
