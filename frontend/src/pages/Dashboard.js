import React from "react"
import Splash from "../components/Splash"
import About from "../components/About";
import CampingGuide from "../components/CampingAndTrekkingGuide ";
import Footer from '../common/Footer'

function Dashboard() {
  return (
    <div>
      <Splash />
      <About />
      <CampingGuide />
      <Footer />
    </div>
  );
}

export default Dashboard;