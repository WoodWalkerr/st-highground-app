import React from "react"
import ListDashboard from "../components/ListDashboard"
import Splash from "../components/Splash"
// import Sample from '../authentication/sample'

function Dashboard() {
  return (
    <div>
      {/* <Sample /> */}
      <Splash />
      <ListDashboard />
    </div>
  );
}

export default Dashboard;