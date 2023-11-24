import React, { useEffect } from 'react'
import Banner from './Banner'
import LatestOffer from './LatestOffer'
import Products from './Products'
import Footer from '../../components/footer/Footer'

const HomePage = () => { 
    useEffect(() => {
        document.title = 'HomePage'
    }, [])
    
  return (
      <section>
          <Banner />
          <LatestOffer />
          <br />
          <br />
          <br />
          <Products />
          <Footer />
          
      </section>
      
  )
}

export default HomePage