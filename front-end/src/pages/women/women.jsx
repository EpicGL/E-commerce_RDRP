import React, { useEffect } from 'react'
import Product from './Product'
import './style.css'

const Women = () => {

    useEffect(() => {
        document.title = 'Women' 
        document.body.style.backgroundColor = '#bababa'
    },[])
    return (
        <>
            <div className='banner-everything'></div>
            <Product />
            
        </>
  )
}

export default Women