import React, { useEffect, useState } from 'react'
import {Row, Col} from 'react-bootstrap'
import Item from './Item'
import Banner2 from '../../components/banner/Banner2'
const Products = () => {
    const [products, setProduct] = useState([])
    
    const getProduct = async () => {
        const url = 'http://127.0.0.1:8000/api/products/';
        try {
            const res = await fetch(url)
            if (res.ok) {
                const data = await res.json()
                setProduct(data)
                console.log(data)
                console.log(products)
            } else {
                console.log('no data found ' + res.status)
            }
        } catch {
            console.log('error at fatching')
        }
    }

    useEffect(() => {
        getProduct()
    },[])

    return (
        <section className='products pb-5'>
            <div className='container pb-5'>
                <h2 className='d-flex justify-content-center pt-5'>Featured Products</h2>
                <hr className='pb-2' />

                <Row>
                    {products.map((product, index) =>  (<Col sm={6} md={4} lg={2} key={index} className='pt-2' ><Item  children={product} />  </Col> ))}
                </Row>

            
                <div className="limited-offer-card text-white mt-4">
                    <Row>
                        <Col lg={8} md={12} className='limited-offer-context'>
                            <h3>Limited Time Offer</h3>
                            <h1 className='mt-4 mb-2'>Special Edition</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, alias at. Expedita dignissimos quae magnam deleniti quisquam similique facere labore delectus voluptate 
                            </p>

                            <h4 className='mt-4'>Buy This Couple pier At 20% Discount, Use Code OFF20</h4>

                            <button className='btun-white mt-4'>SHOP NOW</button>
                        </Col>
                    </Row>                    
                </div>
            
                <Banner2/>

            </div>


        </section>
  )
}

export default Products