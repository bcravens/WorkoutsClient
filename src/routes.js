import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Welcome from './components/Welcome'
import SignupPage from './components/signup/SignupPage'
import LoginPage from './components/login/LoginPage'
import WorkoutsPage from './components/workouts/WorkoutsPage'
import NewWorkoutPage from './components/workouts/NewWorkoutPage'
import WorkoutPage from './components/workouts/WorkoutPage'

import requireAuth from './utils/requireAuth'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/workouts" component={requireAuth(WorkoutsPage)} />
    <Route path="/workout/:workout" component={requireAuth(WorkoutPage)} />
    <Route path="/new_workout" component={requireAuth(NewWorkoutPage)} />
  </Route>
)
