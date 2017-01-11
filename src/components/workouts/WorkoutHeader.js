import React from 'react'
import { PageHeader } from 'react-bootstrap'

class WorkoutHeader extends React.Component {
  render() {
    let { workout } = this.props
    let results = workout.map( (workout, index) => {
      return (
        <PageHeader key={index} className="workoutHeader">{ workout.name }</PageHeader>
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
