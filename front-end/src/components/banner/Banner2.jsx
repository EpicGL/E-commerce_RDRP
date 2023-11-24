import React from 'react'
import { Row, Col } from 'react-bootstrap'
import glob from '../../assets/svg/globe-2-svgrepo-com.svg'
import dress from '../../assets/svg/dress-stylish.svg'
import bestOffer from '../../assets/svg/discount-label.svg'
import securePayment from '../../assets/svg/shield-lock.svg'

const Banner2 = () => {
    return (
        <section className='mt-5' style={{overflow:'hidden'}}>
            <Row>
                <Col sm={12} lg={6} className='d-flex flex-column align-items-center mt-5'> <img className='banner2-img' src={glob} alt="glob" /> <h4 className='mt-4'>WorldWide Shipping </h4> <p className='d-flex text-center' style={{maxWidth:'80%'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero voluptatibus optio laborum perspiciatis consequatur quibusdam unde vitae nesciunt</p> </Col>
                <Col sm={12} lg={6} className='d-flex flex-column align-items-center mt-5'> <img className='banner2-img' src={dress} alt="dress" /> <h4 className='mt-4'>Best Quality </h4> <p className='d-flex text-center' style={{maxWidth:'80%'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero voluptatibus optio laborum perspiciatis consequatur quibusdam unde vitae nesciunt</p> </Col>
                <Col sm={12} lg={6} className='d-flex flex-column align-items-center mt-5'> <img className='banner2-img' src={bestOffer} alt="best-offer" /> <h4 className='mt-4'>Best Offers </h4> <p className='d-flex text-center' style={{maxWidth:'80%'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero voluptatibus optio laborum perspiciatis consequatur quibusdam unde vitae nesciunt</p> </Col>
                <Col sm={12} lg={6} className='d-flex flex-column align-items-center mt-5'> <img className='banner2-img' src={securePayment} alt="secure-payment" /> <h4 className='mt-4'>Secure Payments</h4> <p className='d-flex text-center' style={{maxWidth:'80%'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero voluptatibus optio laborum perspiciatis consequatur quibusdam unde vitae nesciunt</p> </Col>
            </Row>
        </section>
  )
}

export default Banner2