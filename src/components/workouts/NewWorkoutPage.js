/* eslint-disable */
import React from 'react'
import WorkoutForm from './WorkoutForm'
import { connect } from 'react-redux'
import { addFlashMessage } from '../../actions/flashMessages.js'
import NavBar from '../NavBar'

class NewWorkoutPage extends React.Component {
  render() {
    const { addFlashMessage, user } = this.props
    return (
      <div>
        <NavBar />
        <div className="col-md-4 col-md-offset-4">
          <WorkoutForm
            addFlashMessage={addFlashMessage}
            user={this.props.user}/>
        </div>
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
