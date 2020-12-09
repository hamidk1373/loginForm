import React, { useContext } from 'react'
import { Route, useHistory, Switch } from 'react-router-dom'
import { AuthorizationContext } from '../contexts/Authorization'

export default function UserPanelRouter() {
  const history = useHistory()

  const { isLoggedIn } = useContext(AuthorizationContext)

  if (!isLoggedIn) {
    history.replace('/loginForm')
  }
  return (
    <Switch>
      <Route path="/profile/account">
        <div>account page</div>
      </Route>
      <Route path="/profile/purchases">
        <div>purchases page</div>
      </Route>
    </Switch>
  )
}
