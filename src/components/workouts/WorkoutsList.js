import React from 'react'

class WorkoutsList extends React.Component {
  render() {
    let { workouts } = this.props
    let results = workouts.map( (workout, index) => {
      return (
        <div key={index}>
          <p>{ workout.name }</p>
        </div>
      )
    })

    const emptyMessage = (
      <p>There are no workouts yet!</p>
    )

    return (
      <div>
        { workouts.length === 0 ? emptyMessage : results }
      </div>
    )
  }
}

export default WorkoutsList

WorkoutsList.propTypes = {
  workouts: React.PropTypes.array.isRequired
}
