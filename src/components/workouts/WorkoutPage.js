import React from 'react'
import { connect } from 'react-redux'
import { getWorkout } from '../../actions/workoutActions'

class WorkoutPage extends React.Component {
  componentDidMount() {
    this.props.getWorkout(this.props.user.id, this.props.params.workout)
  }
  render() {
    return (
      <div>
        <h1>{ this.props.workout.name }</h1>
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

export default connect(mapStateToProps, { getWorkout })(WorkoutPage)
