import React, { useEffect } from 'react'
import Product from './Product'
import './style.css'

const Accessories = () => {

    useEffect(() => {
        document.title = 'Accessories' 
        document.body.style.backgroundColor = '#bababa'
    },[])
    return (
        <>
            <div className='banner-everything'></div>
            <Product />
            
        </>
  )
}

export default Accessories