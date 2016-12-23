import React from 'react'

class WorkoutHeader extends React.Component {
  render() {
    let { workout } = this.props
    let results = workout.map( (workout, index) => {
      return (
        <h1 key={index}>{ workout.name } </h1>
      )
    })
    const emptyMessage = (
      <p>You have no workouts yet!</p>
    )
    return (
      <div className="workoutHeader">
        { workout.length === 0 ? emptyMessage : results }
      </div>
    )
  }
}

export default WorkoutHeader
