import React from 'react'
const Item = ({children}) => {
    return (
        <>
            <div>
                <img style={{maxWidth:'295px', height:'295px'}} src={'http://127.0.0.1:8000/'+children.img_main} alt={children.name} />
                <div><strong>{ children.name}</strong></div>
                <p>{children.price}</p>
            </div>
        </>
  )
}

export default Item