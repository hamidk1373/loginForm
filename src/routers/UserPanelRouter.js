import React from "react";
import { Route, useHistory } from "react-router-dom";
import { Switch } from "react-router-dom";

export default function UserPanelRouter() {
  const history = useHistory();
  if (!localStorage.token) {
    history.replace("/loginForm");
  }
  return (
    <Switch>
      <Route path='/profile/account'>
        <div>account page</div>
      </Route>
      <Route path='/profile/purchases'>
        <div>purchases page</div>
      </Route>
    </Switch>
  );
}
