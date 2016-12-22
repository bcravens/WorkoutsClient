import React from 'react'
import { Link } from 'react-router'

class WorkoutsList extends React.Component {
  render() {

    let { workouts } = this.props
    let results = workouts.map( (workout, index) => {
      let rtStr = `/workout/${workout.id}`
      return (
        <Link to={ rtStr } key={index}>
            <div className="panel panel-default workout">
              <div className="panel-body">
                { workout.name }
              </div>
            </div>
        </Link>
      )
    })
    const emptyMessage = (
      <p>You have no workouts yet!</p>
    )
    return (
      <div className="workouts">
        { workouts.length === 0 ? emptyMessage : results }
      </div>
    )
  }
}

export default WorkoutsList

WorkoutsList.propTypes = {
  workouts: React.PropTypes.array.isRequired
}
