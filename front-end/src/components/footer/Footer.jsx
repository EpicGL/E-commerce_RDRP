import React from 'react'
import { Col, Row } from 'react-bootstrap'


const Footer = () => {
    return (
        <section className='bg-white'>
            <h4 style={{padding:' 25px 0 20px 0 '}} className='container'>SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</h4>
        
        <div className='footer pb-5'>
            <div className="container">
                <Row>
                    <Col className='pt-sm-4 pt-3' sm={12} lg={5}><h1 style={{color:'black'}}><strong>MWS</strong></h1> <h4 className='mt-5'>The Best Look anytime, anywhere</h4> </Col>
                    <Col className='mt-4' sm={12} lg={2}>
                        <p style={{ color: 'black', fontSize : '1.3rem' }}>For Women</p>
                        <a className='nav-link' href="#">Women Jeans</a>
                        <a className='nav-link pt-2' href="#">Tops and Shirts</a>
                        <a className='nav-link pt-2' href="#">Women Jackets</a>
                        <a className='nav-link pt-2' href="#">High Heels</a>
                        <a className='nav-link pt-2' href="#">Women Accessories</a>

                    </Col>

                    <Col className='mt-4' sm={12} lg={2}>
                        <p style={{ color: 'black', fontSize : '1.3rem' }}>For Men</p>
                        <a className='nav-link' href="#">Men Jeans</a>
                        <a className='nav-link pt-2' href="#">Shirts</a>
                        <a className='nav-link pt-2' href="#">Men Jackets</a>
                        <a className='nav-link pt-2' href="#">Men Shoes</a>
                        <a className='nav-link pt-2' href="#">Men Accessories</a>

                    </Col>

                    <Col className='mt-4' sm={12} lg={3}>
                        <p style={{ color: 'black', fontSize : '1.3rem'}}>Subscribe</p>
                        <input className='form-control footer-input' placeholder='Your email address...' type="text" />
                        <button className='btn-sub mt-3'>SUBSCRIBE</button>
                    </Col>
                </Row>
            </div>
        </div>
        </section>
  )
}

export default Footer