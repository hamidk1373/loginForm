import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import CustomToast from "./components/CustomToast";
import Routers from "./routers";

function App() {
  return (
    <BrowserRouter>
      <CustomToast />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
