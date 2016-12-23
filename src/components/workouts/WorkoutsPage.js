import React from 'react'
import { connect } from 'react-redux'
import WorkoutsList from './WorkoutsList'
import { getWorkouts } from '../../actions/workoutActions'
import NavBar from '../NavBar'
import '../../../public/styles/workouts.css'

class WorkoutsPage extends React.Component {
  componentDidMount() {
    this.props.getWorkouts(this.props.user.id)
  }
  render() {
    return (
      <div>
        <NavBar />
        <WorkoutsList workouts={this.props.workouts} />
      </div>
    )
  }
}

WorkoutsPage.propTypes = {
  workouts: React.PropTypes.array.isRequired,
  getWorkouts: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    workouts: state.workouts,
    user: state.auth.user
  }
}

export default connect(mapStateToProps, { getWorkouts })(WorkoutsPage)
