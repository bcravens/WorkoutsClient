/* eslint-disable */
import React from 'react'
import { connect } from 'react-redux'
import { createExercise } from '../../actions/exerciseActions'
import TextFieldGroup from '../common/TextFieldGroup'

class ExerciseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      user_id: this.props.user.id,
      workout_id:this.props.workout,
      sets: '',
      reps: '',
      weight: '',
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    let input = {
      name: this.state.name,
      user_id: this.state.user_id,
      workout_id: parseInt(this.state.workout_id),
      sets: parseInt(this.state.sets),
      reps: parseInt(this.state.reps),
      weight: parseInt(this.state.weight),
    }
      this.props.createExercise(input).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You have successfully created a new Exercise! Add some more'
          })
          this.context.router.push(`/workout/${this.props.workout}`)
          this.setState({name: '', sets: '', reps: '', weight: ''})
        }
      )
  }

  render() {
    const { name, sets, reps, weight, user_id, workout_id } = this.state

    return (
      <form onSubmit={this.onSubmit} className="exerciseForm">
        <h2>New Exercise</h2>

        <TextFieldGroup
          field="name"
          label="Name"
          name="name"
          value={name}
          onChange={this.onChange}
        />

        <TextFieldGroup
          field="sets"
          label="Sets"
          name="sets"
          value={sets}
          onChange={this.onChange}
        />

        <TextFieldGroup
          field="reps"
          label="Reps"
          name="reps"
          value={reps}
          onChange={this.onChange}
        />

        <TextFieldGroup
          field="weight"
          label="Weight"
          name="weight"
          value={weight}
          onChange={this.onChange}
        />

      <button type="submit" className="btn btn-primary">Create</button>
      </form>
    )
  }
}

ExerciseForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

ExerciseForm.propTypes = {
  createExercise: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

export default connect(null, { createExercise })(ExerciseForm)
