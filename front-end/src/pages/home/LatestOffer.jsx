import React from 'react'
import { Col, Row } from 'react-bootstrap'
import tankTops from '../../assets/img/pexels-harsh-kushwah.jpg'
import eyeWears from '../../assets/img/pexels-chloe-1043474.jpg'
import bestOffer from '../../assets/img/pexels-ricardo-acevedo.jpg'

const LatestOffer = () => {
    return (
        <section className='container mt-5'>
            <Row className='d-flex justify-content-around'>
                <Col sm={12} lg={6} ><h1>LOGO</h1></Col>
                <Col sm={12} lg={6} ><strong>Logoipsum</strong></Col>
            </Row>
            <Row className='justify-content-around'>
                <Col sm={12} lg={4} className='offer-card'>
                    <img src={tankTops} alt="tanktops" />
                    <div className="offer-card-context z-2 text-white">
                        <h3>
                            20% Off On Tank Tops
                        </h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium perferendis minus, minima nemorder
                        </p>
                        <button className='btun-white'>SHOP NOW</button>
                    </div>
                </Col>
                <Col sm={12} lg={4} className='offer-card'>
                    <img src={eyeWears} alt="eyewears" />
                    <div className="offer-card-context text-white">
                        <h3>
                            Latest Eyewear For You
                        </h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium perferendis minus, minima nemorder
                        </p>
                        <button className='btun-white'>SHOP NOW</button>
                    </div>
                </Col>
                <Col sm={12} lg={4} className='offer-card'>
                    <img src={bestOffer} alt="bestoffer" />
                    <div className="offer-card-context text-white">
                        <h2>
                            Let's Lorem Suit Up!
                        </h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium perferendis minus, minima nemorder
                        </p>
                        <button className='btun-white'>CHECK OUT</button>
                    </div>
                </Col>

            </Row>
        </section>
    )
}

export default LatestOffer