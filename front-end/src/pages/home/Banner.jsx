import React from 'react'
import { Col, Row } from 'react-bootstrap'
const Banner = () => {
  return (
      <section className="banner">
          <div  className='container text-white'>
              <Row>
                  <Col ms={12} lg={7}>
                      <h1>Raining Offers</h1>
                      <h1>For Hot Summers!</h1>
                      <h4>25% Off On All Products</h4>
                      <span className='d-flex'>
                          <button className='btn btn-light' >SHOP NOW</button>
                          <button className='btn btn-trans ms-2'>FIND MORE</button>
                      </span>
                  </Col>
              </Row>
          </div>
      </section>
  )
}

export default Banner