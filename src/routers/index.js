import React from "react";
import MainRouter from "./MainRouter";
import UserPanelRouter from "./UserPanelRouter";
import { Route } from "react-router-dom";

export default function Routers() {
  return (
    <>
      <Route path='/profile'>
        <UserPanelRouter />
      </Route>
      <Route path='/'>
        <MainRouter />
      </Route>
    </>
  );
}
