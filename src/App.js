import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainRouter from "./MainRouter";
import "react-toastify/dist/ReactToastify.css";
import CustomToast from "./components/CustomToast";

function App() {
  return (
    <BrowserRouter>
      <CustomToast />
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
