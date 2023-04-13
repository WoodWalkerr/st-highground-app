import React from "react"
import ListDashboard from "../components/ListDashboard"
import Splash from "../components/Splash"
// import Splash from "./components/Splash"
// import Footer from "./components/Footer";

function Dashboard() {
  return (
    <div>
      <Splash />
      <ListDashboard />
    </div>
  );
}

export default Dashboard;