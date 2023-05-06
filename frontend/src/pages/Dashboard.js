import React, { useState } from 'react'
import Splash from '../components/Splash'
import About from '../components/About'
import CampingGuide from '../components/CampingAndTrekkingGuide '
import Footer from '../common/Footer'
import UserTable from '../components/UserTable'

function Dashboard() {
    const [showModal, setShowModal] = useState(false)
    const handlePendingRequestsClick = () => {
        setShowModal(true)
    }

    return (
        <div>
            <Splash onPendingRequestsClick={handlePendingRequestsClick} />
            {showModal && <UserTable setShowModal={setShowModal} />}
            <About />
            <CampingGuide />
            <Footer />
        </div>
    )
}

export default Dashboard
