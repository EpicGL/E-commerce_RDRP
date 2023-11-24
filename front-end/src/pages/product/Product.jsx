import React, { useEffect, useState } from 'react'
import {Col} from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const Product = () => {
    const [product, setProduct] = useState({})
    const { slug } = useParams()
    
    const get_Product = async () => {
        const url = `http://127.0.0.1:8000/api/product/${slug}`
        try {
            const res = await fetch(url)
            if (res.ok) {
                const data = await res.json()
                setProduct(data)
                console.log(data)
                document.title = product.name
            } else {
                console.log( 'error code: ' +res.status)
            }
        } catch {
            console.log('error at fetching')
        }
    }

    useEffect(() => {
        get_Product() 
        
    },[])
    return (
        <section className='d-flex'>
                <div className='p-5'>
                <img style={{maxWidth:'30rem'}} src={'http://127.0.0.1:8000/'+product.img_main} alt={product.name} />
                </div>
                <Col className='p-5'>
                <h5>{product.name}</h5> 
                <p>{product.body}</p>
                <h6> ${product.price}</h6>
                </Col>
        </section>
  )
}

export default Product