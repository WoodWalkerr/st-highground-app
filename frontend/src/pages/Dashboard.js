import React from "react"
import Splash from "../components/Splash"
import About from "../components/About";
import CampingGuide from "../components/CampingAndTrekkingGuide ";
import RequestList from "../components/VisitStatus";

function Dashboard() {
  return (
    <div>
      <Splash />
      <About />
      <CampingGuide />
      <RequestList />
    </div>
  );
}

export default Dashboard;