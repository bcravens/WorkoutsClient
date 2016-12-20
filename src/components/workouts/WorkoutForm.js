import React from 'react'
import { connect } from 'react-redux'
import { createWorkout } from '../../actions/workoutActions'
import TextFieldGroup from '../common/TextFieldGroup'

class WorkoutForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      user_id: this.props.user.id,
      errors: {},
      isLoading: false
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.createWorkout(this.state)
  }

  render() {
    const { name, user_id, errors, isLoading } = this.state

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Create New Workout</h1>

        <TextFieldGroup
          field="title"
          label="Workout Title"
          name="title"
          value={title}
          onChange={this.onChange}
          error={errors.title}
        />

      <button type="submit" disabled={ isLoading } className="btn btn-primary">Create</button>
      </form>
    )
  }
}

WorkoutForm.propTypes = {
  createWorkout: React.PropTypes.func.isRequired
}

export default connect(null, { createWorkout })(WorkoutForm)
