import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './common/Navbar'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/sign-up" element={<Signup /> } />
                <Route path="/login" element={<Login /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App
