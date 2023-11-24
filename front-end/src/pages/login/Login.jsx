import React from 'react'
import { Nav } from 'react-bootstrap' 
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <section>
            <form action="">
                <h3 className='d-flex justify-content-center'>Login</h3>
                <input className='form-control mt-3' type="username" name="username"  placeholder='Username...'/>
                <input className='form-control mt-3' type="password" name="password" placeholder='Password' />
                <input className='form-control btn btn-primary mt-3' type="button" value="Login" />

                <div>
                    <p className='d-flex justify-content-center mt-3'> Don't have an account ? <Nav.Link className=' ms-2 text-primary' as={Link} to={'/register'}>Register </Nav.Link></p>
                </div>        
            </form>
        </section>
    )
}

export default Login