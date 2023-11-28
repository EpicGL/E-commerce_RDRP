import React, { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap'
import { Link  } from 'react-router-dom'
import profileIcon from '../../assets/svg/user-person.svg'

const User = () => {
    const [userLink, setUserLink] = useState('')
    
    const verify = async () => {

        const token = localStorage.getItem('access')
        const url = 'http://127.0.0.1:8000/api/token/verify/'
        const header = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,  // Include the token in the Authorization header
            },
        }
        const res = await fetch(url, header)
        if (res.ok) {
            const data = await res.json()
            console.log(data)
            setUserLink('/profile')
        } else {
            setUserLink('/login')
            console.log('error code: ' +res.statusText)
        }
    }

    useEffect(() => {
        verify()
    },[])
    return (
        <section>
            <Nav.Link className='nav-link active m-2' as={Link} to={userLink}>
                <img style={{maxWidth:'40px'}}  src={profileIcon} alt="" />
            </Nav.Link>
        </section>
    )
}

export default User