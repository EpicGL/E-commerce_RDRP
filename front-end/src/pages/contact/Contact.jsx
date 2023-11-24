import React, {useEffect} from 'react'
import Banner from './Banner'
import ContactInfo from './ContactInfo'
import SandMessage from './SandMessage'
import Footer from '../../components/footer/Footer'


const Contact = () => {

    useEffect(() => {
        document.title = 'Contact Us'
        document.body.style.backgroundColor = 'rgb(236, 236, 236)'
    },[])
  return (
      <>
          <Banner />
          <ContactInfo />
          <SandMessage />
          <br />
          <br />
          <Footer />
      </>
  )
}

export default Contact