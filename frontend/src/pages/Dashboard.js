import React from "react"
import Splash from "../components/Splash"
import UserModal from '../modal/UsersModal'
import About from "../components/About";

function Dashboard() {
  return (
    <div>
      <Splash />
      <UserModal />
      <About />
    </div>
  );
}

export default Dashboard;