import React from 'react'
import { Row, Col, Nav } from 'react-bootstrap' 
import { Link } from 'react-router-dom'

export const Register = () => {
    return (
        <section>
            <form action="">
                                                
                <h3 className='d-flex justify-content-center'>Register</h3>

                <Row>
                    <Col ms={12} lg={6}><input className='form-control mt-3' type="text" name='name1' placeholder='First name' /></Col>
                    <Col ms={12} lg={6}><input className='form-control mt-3' type="text" name='name2' placeholder='Last name' /></Col>
                </Row>
                <input className='form-control mt-3' type="email" name="email"  placeholder='Email...'/>
                <input className='form-control mt-3' type="username" name="username"  placeholder='Username...'/>
                <input className='form-control mt-3' type="password" name="password1" placeholder='Password' />
                <input className='form-control mt-3' type="password" name="password2" placeholder='Confirm Password' />
                <input className='form-control btn btn-primary mt-3' type="button" value="Register" />

                <div>
                    <p className='d-flex justify-content-center mt-3'> Already have an account ? <Nav.Link className=' ms-2 text-primary' as={Link} to={'/login'}>Login</Nav.Link></p>
                </div> 
            </form>
        </section>
    )
    
}
