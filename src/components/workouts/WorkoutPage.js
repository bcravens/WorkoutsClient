/* eslint-disable */
import React from 'react'
import { connect } from 'react-redux'
import { getWorkout } from '../../actions/workoutActions'
import { getExercises } from '../../actions/exerciseActions'
import { addFlashMessage } from '../../actions/flashMessages.js'
import WorkoutHeader from './WorkoutHeader'
import NavBar from '../NavBar'
import ExerciseList from '../exercises/ExerciseList'
import ExerciseForm from '../exercises/NewExerciseForm'
import FlashMessagesList from '../flash/FlashMessagesList'
import '../../../public/styles/workouts.css'

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
      <div style={{"background": 'rgb(231,233,232)' }}>
          <NavBar />
          <FlashMessagesList />
          <div className="exerciseContent">
            <WorkoutHeader workout={this.props.workout} />
            <div className="exerciseContainer">
              <ExerciseList exercises={this.props.exercises} />
              <ExerciseForm
                addFlashMessage={addFlashMessage}
                user={this.props.user}
                workout={this.props.params.workout} />
              </div>
            <div className="exerciseContainer">
            </div>
          </div>
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
