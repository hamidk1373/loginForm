import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom'
import CustomToast from './components/CustomToast'
import Routers from './routers'
import './App.css'
import AuthorizationContextProvider from './contexts/Authorization'

function App() {
  return (
    <AuthorizationContextProvider>
      <BrowserRouter>
        <CustomToast />
        <Routers />
      </BrowserRouter>
    </AuthorizationContextProvider>
  )
}

export default App
