// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./common/Dashboard";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//           <Route path="/" element={<Dashboard />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from "react"
import InputDashboard from "./components/InputDashboard"
import ListDashboard from "./components/ListDashboard"
import Navbar from "./common/Navbar"
import Splash from "./components/Splash"
import Footer from "./common/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Splash />
      <InputDashboard />
      <ListDashboard />
      <Footer />
    </div>
  );
}

export default App;
