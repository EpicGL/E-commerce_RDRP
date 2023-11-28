import React, { useEffect, useState } from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import menuIcon from '../../assets/svg/menu-icon.svg'
import cartIcon from '../../assets/svg/cart-shopping-icon.svg'
import Cart from '../cart/Cart'
import User from './User';

const NavBar = () => {
  
  const [scrolled, setScrolled] = useState(false);
  const [cartState, setCartState] = useState(false)
  const [cartCunt, setCartCumt] = useState()

  useEffect(() => {
    if (cartCunt > 0) {
      document.getElementById('cart-cunt').innerText = cartCunt
    } else {
      document.getElementById('cart-cunt').innerText = '99'
    }

  },[cartCunt])

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
        console.log('scrolled')
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
    <>
      <Navbar expand="lg" className={scrolled ? 'nav-navbar scrolled': 'nav-navbar'} variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">
            <h3>MWS</h3>
          </Navbar.Brand>
                  <Navbar.Toggle style={{border:'solid 1px #00000000'}} aria-controls="navbar-collapse-id">
                    <span><img style={{maxWidth:'35px'}} src={menuIcon} alt="" /></span>
                  </Navbar.Toggle>
                <Navbar.Collapse id="navbar-collapse-id">
                    <Nav className='mx-auto me-5'>
                      <Nav.Link className='nav-link active' as={Link} to="/everything">EVERYTHING</Nav.Link>
                      <Nav.Link className='nav-link active' as={Link} to="/women">WOMEN</Nav.Link>
                      <Nav.Link className='nav-link active' as={Link} to="/men">MEN</Nav.Link>
                      <Nav.Link className='nav-link active' as={Link} to="/accessories">ACCESSORIES</Nav.Link>
                    </Nav>
                    <Nav className='me-auto'>
                      <Nav.Link className='nav-link' as={Link} to="/about">ABOUT</Nav.Link>
                      <Nav.Link className='nav-link' as={Link} to="/contact-us">CONTACT US</Nav.Link>
                    </Nav>
                    <Nav.Item>
                    <span className='d-flex text-white' style={{cursor:'pointer'}}  >
                        <div className='me-4 d-flex align-items-center'>$0.00</div>
                        <div className='position-relative p-2'>
                        <img style={{maxWidth:'40px'}} onClick={() => setCartState(true)} src={cartIcon} alt="" />
                        <p id='cart-cunt' className='position-absolute bg-danger' style={{right:'0', top:'0' , borderRadius:'50vh', padding:'0 3px 0 3px'}} ></p>
                        </div>
                        {<User/>}    
                                            
                    </span>       
                    </Nav.Item>
                </Navbar.Collapse>
            </Container>
      </Navbar>
      <Cart cartState={cartState} setCartState={setCartState} />
    </>
  )
}

export default NavBar
