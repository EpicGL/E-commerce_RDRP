import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Item from './Item'

const ProductList = () => {

    const tempList = [
        
        {
            'price': 999,
            'count': 99,
        },

        {
            'price': 991,
            'count': 99,
        },

        {
            'price': 299,
            'count': 9,
        },

        {
            'price': 199,
            'count': 99,
        },

    ]

    return (
        <div className='m-2'>
            <Row>
                {tempList.map((item, index) =>( 
                    
                    <Col key={index} sm={12}> <Item product={item} /> </Col>
                    
                ))}          
            </Row>
        </div>
    )
}

export default ProductList