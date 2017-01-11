/* eslint-disable */
import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/authActions'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class NavBar extends React.Component {
  logout(e) {
    e.preventDefault()
    this.props.logout()
  }

  render() {
    const { isAuthenticated } = this.props.auth

    const userWorkouts = (
      <LinkContainer to="/workouts">
      <NavItem eventKey={1}>Workouts</NavItem>
      </LinkContainer>
    )

    const newWorkout = (
      <LinkContainer to="/new_workout">
      <NavItem eventKey={2}>New Workout</NavItem>
      </LinkContainer>
    )

    const logout = (
      <NavItem eventkey={3} onClick={this.logout.bind(this)}>Logout</NavItem>
    )

    return (
      <Navbar collapseOnSelect inverse>
        <Navbar.Header>
          <LinkContainer to="/">
            <Navbar.Brand>
              Home
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            { isAuthenticated ? userWorkouts : null }
            { isAuthenticated ? newWorkout : null }
            { isAuthenticated ? logout : null }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}



NavBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { logout })(NavBar)
