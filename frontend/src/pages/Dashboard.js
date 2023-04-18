import React from "react"
import ListDashboard from "../components/ListDashboard"
import Splash from "../components/Splash"
// import Paginate from '../components/Paginate'
// import Sample from '../components/sample'

function Dashboard() {
  return (
    <div>
      {/* <Sample /> */}
      <Splash />
      <ListDashboard />
      {/* <Paginate /> */}
    </div>
  );
}

export default Dashboard;