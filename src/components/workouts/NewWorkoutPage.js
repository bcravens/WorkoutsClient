/* eslint-disable */
import React from 'react'
import WorkoutForm from './WorkoutForm'
import { connect } from 'react-redux'
import { addFlashMessage } from '../../actions/flashMessages.js'

class NewWorkoutPage extends React.Component {
  render() {
    const { addFlashMessage, user } = this.props
    return (
      <div>
        <WorkoutForm
          addFlashMessage={addFlashMessage}
          user={this.props.user}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, { addFlashMessage })(NewWorkoutPage)
