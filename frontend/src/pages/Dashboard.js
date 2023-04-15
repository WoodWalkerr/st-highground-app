import React from "react"
import ListDashboard from "../components/ListDashboard"
import Splash from "../components/Splash"
import ScheduleBookForm from "../components/ScheduleBookForm";

function Dashboard() {
  return (
    <div>
      <Splash />
      <ListDashboard />
      <ScheduleBookForm />
    </div>
  );
}

export default Dashboard;