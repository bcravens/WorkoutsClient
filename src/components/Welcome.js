import React from 'react'
import '../../public/styles/welcome.css'
import LoginForm from './login/LoginForm'
import SignupForm from './signup/SignupForm'
import { connect } from 'react-redux'
import { addFlashMessage } from '../actions/flashMessages.js'
import { userSignupRequest, isUserExists } from '../actions/signupActions'
import { logout } from '../actions/authActions'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router'

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: false,
      signup: false,
    }
  }

  logout(e) {
    e.preventDefault()
    this.props.logout()
  }

  render() {
    let closeLogin = () => this.setState({ login: false})
    let closeSignup = () => this.setState({ signup: false})
    const { userSignupRequest, addFlashMessage, isUserExists } = this.props
    const login = (
      <div className="modal" style={{height: 300}}>
        <Modal
          show={this.state.login}
          onHide={close}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="modal-title">Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoginForm />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeLogin}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
    const signup = (
      <div className="modal" style={{height: 300}}>
        <Modal
          show={this.state.signup}
          onHide={close}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="modal-title">Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SignupForm
              isUserExists={isUserExists}
              userSignupRequest={userSignupRequest}
              addFlashMessage={addFlashMessage} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeSignup}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
    const logout = (
      <div>
        <Link to="/workouts">
          <button
            className="loginButton">
            WORKOUTS
          </button>
        </Link>
        <button
          className="loginButton"
          onClick={this.logout.bind(this)}>
          LOGOUT
        </button>
      </div>
    )
    const buttons = (
      <div>
        <button
          className="loginButton"
          onClick={() => this.setState({ login: true })}>
          LOGIN
        </button>
        <button
          className="signupButton"
          onClick={() => this.setState({ signup: true })}>
          SIGNUP
        </button>
      </div>
    )
    return (
      <div className="welcomeContainer" style={{"background": 'url(http://i.imgur.com/9HjXEoC.jpg)', 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-position': 'center' }}>
        <div className="header">
          <h1>I WORKOUT</h1>
        </div>
       <h2>Easily build, track and, organize your workouts all in one place.</h2>
       <div className="welcomeButtons">
         { this.props.auth ? logout : buttons }
         { this.state.login ? login : null }
         { this.state.signup ? signup : null }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.isAuthenticated
  }
}


export default connect(mapStateToProps, { addFlashMessage, logout, userSignupRequest, isUserExists })(Welcome)
