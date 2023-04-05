import React, { Fragment } from "react";
import EditDasboard from "./components/editDashboard";
import InputDashboard from "./components/inputDashboard";
import ListDashboard from "./components/listDashboard";


function App() {
  return (
    <Fragment>
      <EditDasboard />
      <InputDashboard />
      <ListDashboard />
    </Fragment>
  );
}

export default App;
