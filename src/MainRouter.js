import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginForm from "./screens/Login";
import RegisterForm from "./screens/Register/registerForm";

export default function MainRouter() {
  return (
    <Switch>
      <Route path='/registerForm'>
        <RegisterForm />
      </Route>
      <Route path='/loginForm/'>
        <LoginForm />
      </Route>
      <Route exact path='/'>
        <Redirect to='loginForm' />
      </Route>
    </Switch>
  );
}
