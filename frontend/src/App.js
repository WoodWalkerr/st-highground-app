import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Signup from './authentication/Signup'
import Login from './authentication/Login'
import Navbar from './common/Navbar'
import ScheduleBookForm from './components/ScheduleBookForm'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/sign-up" element={<Signup /> } />
                <Route path="/sign-in" element={<Login /> } />
                <Route path="/schedule-a-visit" element={<ScheduleBookForm /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App
