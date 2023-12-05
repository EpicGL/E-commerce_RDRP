import React from 'react'
const Item = ({children}) => {
    return (
        <>
            <div className='shadow bg-white'>
                <img style={{maxWidth:'295px', height:'295px'}} src={'http://127.0.0.1:8000'+children.thumbnail} alt={children.name} />
                <div className='ms-1' ><strong>{ children.name}</strong></div>
                <div className='ms-1 mb-1' >{children.price}</div>
            </div>
        </>
  )
}

export default Item