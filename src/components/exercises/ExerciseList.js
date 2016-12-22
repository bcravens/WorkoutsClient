import React from 'react'

class ExerciseList extends React.Component {
  render() {

    let { exercises } = this.props
    let results = exercises.map( (exercise, index) => {
      return (
            <div className="panel panel-default exercise" key={index}>
              <div className="panel-body">
                <h3>{ exercise.name }</h3>
                <p>{ exercise.set }</p>
                <p>{ exercise.reps }</p>
                <p>{ exercise.weight }</p>
              </div>
            </div>
      )
    })
    const emptyMessage = (
      <p>You have no exercises yet!</p>
    )
    return (
      <div className="exercises">
        { exercises.length === 0 ? emptyMessage : results }
      </div>
    )
  }
}

export default ExerciseList

ExerciseList.propTypes = {
  exercises: React.PropTypes.array.isRequired
}
