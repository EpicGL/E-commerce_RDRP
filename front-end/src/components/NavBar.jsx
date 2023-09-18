import React from 'react'
import { Navbar, Nav, Container, Form, Button} from 'react-bootstrap'; 
import logo from '../assets/logo.svg'

const NavBar = () => {
  return (
    <>
        <Navbar expand="lg" bg="warning" variant="light">
            <Container className='align-items-center'>
                <Navbar.Brand href="/" className='d-flex align-items-center'>
                    <img
                        src={logo}
                        width="46"
                        height="46"
                        className="d-inline-block align-top"
                        alt="Brand Name logo"
                        
                    />{''}
                    Next Shop
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-collapse-id"> 
                    click
                </Navbar.Toggle>
                

                <Navbar.Collapse id="navbar-collapse-id">

                    <Form className='d-flex justify-content-between ms-auto'>
                        <Form.Control type="text" placeholder="search..." className=' shadow' />
                        <Button variant="success" className='ms-1  shadow'>
                            Search
                        </Button>
                    </Form>
                    <Nav className='m-auto'>
                        <Nav.Link href="/">Store</Nav.Link>
                        <Nav.Link href="/cetagory">Cetagory</Nav.Link>
                        <Nav.Link href="/about-us">About Us</Nav.Link>
                    </Nav>  
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default NavBar