import React, {useEffect , useState} from 'react'
import { Row, Col } from 'react-bootstrap'
import crossSVG from '../../assets/svg/plus-large.svg'

const Cart = ({cartState , setCartState}) => {
    

    return (
        <div className={cartState ? 'cart-top d-block' : 'cart-top d-none'}>
            <Row className='cart-side'>
                <Col>
                    <div className='d-flex justify-content-between'>
                        <p className='pt-3'>Shopping Cart</p>
                        <button onClick={() => setCartState(false)} className='btn p-0'><span><img style={{rotate:'45deg' , maxWidth:'2rem'}} src={crossSVG} alt="cross-btn" /></span> </button>
                    </div>
                    <hr />
                    <div>
                        No Product on Cart
                    </div>
                </Col>
                <Col className='position-absolute bottom-0 p-2'>
                    <button className='form-control btn btn-primary'>CONTINUE SHOPPING</button>
                </Col>
            </Row>
        </div>
  )
}

export default Cart