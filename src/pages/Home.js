import React from 'react'
import {Link } from 'react-router-dom'

import Hero from '../components/Hero'
import Banner from '../components/Banner';
import Services from '../components/Services'

const Home = () => {
    return (
        <div>
            <Hero>
            <Banner title="Luxurious Rooms" subtitle="Starting at just $6">
                <Link to ="/rooms" className="btn-primary">
                    Our Rooms
                </Link>

            </Banner>
            </Hero>
            <Services/>
        </div>
    )
}

export default Home;



