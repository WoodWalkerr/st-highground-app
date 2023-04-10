import React, { Fragment } from "react"
import EditDasboard from "./components/editDashboard"
import InputDashboard from "./components/inputDashboard"
import ListDashboard from "./components/listDashboard"
import Navbar from "./common/navbar"
import Splash from "./components/Splash"

function App() {
  return (
    <Fragment>
      <Navbar />
      <Splash />
      <EditDasboard />
      <InputDashboard />
      <ListDashboard />
    </Fragment>
  );
}

export default App;
