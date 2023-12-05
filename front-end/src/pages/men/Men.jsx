import React, { useEffect } from 'react'
import Product from './Product'
import './style.css'

const Men = () => {

    useEffect(() => {
        document.title = 'Men' 
        document.body.style.backgroundColor = '#bababa'
    },[])
    return (
        <>
            <div className='banner-everything'></div>
            <Product />
            
        </>
  )
}

export default Men