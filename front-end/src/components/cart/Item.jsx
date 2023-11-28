import React, from 'react'
import PropTypes from 'prop-types';
import arroLeft from '../../assets/svg/arrow-left-circle.svg'

const Item = ({ product }) => {
    const price = `${product.price}.00$`
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <img className='bg-primary' style={{ height: '4rem', width: '4rem' }} src="" alt="" />
            <div className='d-flex align-items-center'>
                <button className='btn'><img src={arroLeft} style={{maxWidth:'2rem'}} alt="" /></button>
                <div style={{ fontSize: '20px' }} id='item-count'>{ product.count }</div>
                <button className='btn'><img src={arroLeft} style={{maxWidth:'2rem', rotate:'180deg'}} alt="" /></button>
            </div>
            <div type='text' style={{fontSize:'18px', fontWeight:'600'}} id='item-price'>{price}</div>
        </div>
    )
    
}
Item.propTypes = {
    product: PropTypes.shape({
      count: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  };

export default Item