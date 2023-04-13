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
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Navbar from './common/Navbar'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/sign-up" element={<Signup /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App
