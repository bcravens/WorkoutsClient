import React from 'react'
import { Table } from 'react-bootstrap'


class ExerciseList extends React.Component {
  render() {
    let { exercises } = this.props
    let result = exercises.map( (exercise, index) => {
     return (
       <tr key={index}>
         <td>{index + 1}</td>
         <td>{ exercise.name }</td>
         <td>{ exercise.sets }</td>
         <td>{ exercise.reps }</td>
         <td>{ exercise.weight }</td>
       </tr>
     )
   })

    const results = (
      <Table className="exerciseList">
        <thead>
          <tr>
            <th>Exercises</th>
            <th>Name</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
            { result }
        </tbody>
      </Table>
    )


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
