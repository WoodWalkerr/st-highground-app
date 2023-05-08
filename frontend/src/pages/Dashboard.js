import React from 'react'
import Splash from '../components/Splash'
import About from '../components/About'
import CampingGuide from '../components/CampingAndTrekkingGuide '
import Footer from '../common/Footer'
import Services from '../components/Services'

function Dashboard() {
    return (
        <div>
            <Splash />
            <About />
            <CampingGuide />
            <Services />
            <Footer />
        </div>
    )
}

export default Dashboard
