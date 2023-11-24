import React from 'react'

const Item = ({children}) => {
  return (
    <div className='product-card'>
      <img style={{height:'75%', width:'100%'}} src={'http://127.0.0.1:8000/'+children.img_main} alt={children.name} />

        <a className='nav-link' href={'/product/' + children.slug }><p style={{margin:'0'}}><strong>{children.name}</strong></p></a> 
      <p style={{ fontSize:'12px', margin:'0'}}> ${children.price}</p>
    </div>
  )
}

export default Item