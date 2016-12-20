import React from 'react'
import WorkoutForm from './WorkoutForm'
import { connect } from 'react-redux'

class NewWorkoutPage extends React.Component {
  render() {
    return (
      <div>
        <WorkoutForm user={this.props.user}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(NewWorkoutPage)
