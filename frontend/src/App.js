import React, { Fragment } from "react"
import InputDashboard from "./components/inputDashboard"
import ListDashboard from "./components/listDashboard"
import Navbar from "./common/navbar"
import Splash from "./components/Splash"

function App() {
  return (
    <Fragment>
      <Navbar />
      <Splash />
      <InputDashboard />
      <ListDashboard />
    </Fragment>
  );
}

export default App;
