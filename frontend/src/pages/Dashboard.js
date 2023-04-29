import React from "react"
import Splash from "../components/Splash"
import About from "../components/About";
import CampingGuide from "../components/CampingAndTrekkingGuide ";

function Dashboard() {
  return (
    <div>
      <Splash />
      <About />
      <CampingGuide />
    </div>
  );
}

export default Dashboard;