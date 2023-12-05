import React, { useEffect } from 'react'
import Product from './Product'
import './style.css'

const EveryThing = () => {

    useEffect(() => {
        document.title = 'Everything' 
        document.body.style.backgroundColor = '#bababa'
    },[])
    return (
        <>
            <div className='banner-everything'></div>
            <Product />
            
        </>
  )
}

export default EveryThing