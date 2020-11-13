import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom'
import CustomToast from './components/CustomToast'
import Routers from './routers'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CustomToast />
      <Routers />
    </BrowserRouter>
  )
}

export default App
