import React, { useEffect } from 'react'
import Banner from './Banner'
import WhoweAre from './WhoweAre'
import OurTeam from './OurTeam'
import Banner2 from '../../components/banner/Banner2'
import Footer from '../../components/footer/Footer'
const AboutUs = () => {

    useEffect(() => {
        document.title = 'About Us'
        document.body.style.backgroundColor = 'rgb(236, 236, 236)'
    },[])
    return (
        <>
            <Banner /> 
            <br />
            <br />
            <WhoweAre />
            <br />
            <br />
            <OurTeam/>
            <Banner2 />
            <br />
            <Footer/>
        </>
    )
}

export default AboutUs