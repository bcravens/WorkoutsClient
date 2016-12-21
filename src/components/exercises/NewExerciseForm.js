import React from 'react'
import { connect } from 'react-redux'
import { createExercise } from '../../actions/exerciseActions'
import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

function validateInput(data) {
  let errors = {}

  if (Validator.isEmpty(data.name)) {
    errors.name = 'This field is required'
  }
  if (Validator.isEmpty(data.sets)) {
    errors.name = 'This field is required'
  }
  if (Validator.isEmpty(data.reps)) {
    errors.name = 'This field is required'
  }
  if (Validator.isEmpty(data.weight)) {
    errors.name = 'This field is required'
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}

class ExerciseForm extends React.Component {
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

  isValid() {
    const { errors, isValid } = validateInput(this.state)
    if (!isValid) {
      this.setState({ errors })
    }
    return isValid
  }

  onSubmit(e) {
    e.preventDefault()
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true })
      this.props.createWorkout(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You have successfully created a new workout! Now add some exercises.'
          })
          this.context.router.push('/workouts')
        },
        (err) => this.setState({ errors: err.response.data, isLoading: false })
      )
    }
  }

  render() {
    const { name, user_id, errors, isLoading } = this.state

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Create New Workout</h1>

        <TextFieldGroup
          field="name"
          label="Name"
          name="name"
          value={name}
          onChange={this.onChange}
          error={errors.name}
        />

      <button type="submit" disabled={ isLoading } className="btn btn-primary">Create</button>
      </form>
    )
  }
}

WorkoutForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

WorkoutForm.propTypes = {
  createWorkout: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

export default connect(null, { createWorkout })(WorkoutForm)
