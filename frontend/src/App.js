import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Signup from './authentication/Signup'
import Login from './authentication/Login'
import ScheduleBookForm from './components/ScheduleBookForm'
import Navbar from './common/Navbar'
import ListDashboard from "./components/ListDashboard"
import VisitList from './components/VisitList'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Dashboard /></Layout>} />
        <Route path="/sign-up" element={<Layout><Signup /></Layout>} />
        <Route path="/sign-in" element={<Layout><Login /></Layout>} />
        <Route path="/schedule-a-visit" element={<Layout><ScheduleBookForm /></Layout>} />
        <Route path="/list-dashboard" element={<ListDashboard />} />
        <Route path="/visit-request" element={<VisitList />} />
      </Routes>
    </BrowserRouter>
  );
}

function Layout(props) {
  const { children } = props;
  const path = window.location.pathname;
  const showNavbar = ['/','/sign-up','/sign-in','/schedule-a-visit'].includes(path);
  return (
    <>
      {showNavbar && <Navbar />}
      {children}
    </>
  );
}

export default App;
