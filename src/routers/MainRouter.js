import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import LoginForm from '../screens/Login'
import RegisterForm from '../screens/Register'

export default function MainRouter() {
  return (
    <Switch>
      <Route path="/home">
        <div>Homepage</div>
      </Route>
      <Route path="/registerForm">
        <RegisterForm />
      </Route>
      <Route path="/loginForm">
        <LoginForm />
      </Route>
      <Route exact path="/">
        <Redirect to="loginForm" />
      </Route>
    </Switch>
  )
}
