import React from 'react'
import { Route } from 'react-router-dom'
import MainRouter from './MainRouter'
import UserPanelRouter from './UserPanelRouter'

export default function Routers() {
  return (
    <>
      <Route path="/profile">
        <UserPanelRouter />
      </Route>
      <Route path="/">
        <MainRouter />
      </Route>
    </>
  )
}
