import React from 'react'
import {Row, Col} from 'react-bootstrap'
const ContactInfo = () => {
  return (
      <section className='pt-5'>
          <div className="container">
              <h4 className='d-flex justify-content-center'>Have any question ?</h4>
              <h1 className='d-flex justify-content-center'>We are here to help</h1>
              <Row className='justify-content-center pt-3'>
                  <Col sm={12} md={5} lg={3} style={{maxWidth:'285px'}}> <div style={{borderRadius:'10px'}} className='pt-3 bg-white shadow'><h2 className="text-center">Sales</h2> <p className="text-center"> Lorem ipsum dolor sit amet consectetur  </p> <p className="text-center text-primary pb-3"><strong>088 9950 009</strong></p></div></Col>
                  <Col sm={12} md={5} lg={3} style={{maxWidth:'285px'}}> <div style={{borderRadius:'10px'}} className='pt-3 bg-white shadow'><h2 className="text-center">Complaints</h2> <p className="text-center"> Lorem ipsum dolor sit amet consectetur  </p> <p className="text-center text-primary pb-3"><strong>088 9950 009</strong></p></div></Col>
                  <Col sm={12} md={5} lg={3} style={{maxWidth:'285px'}}> <div style={{borderRadius:'10px'}} className='pt-3 bg-white shadow'><h2 className="text-center">Returns </h2> <p className="text-center"> Lorem ipsum dolor sit amet consectetur  </p> <p className="text-center text-primary pb-3"><strong>088 9950 009</strong></p></div></Col>
                  <Col sm={12} md={5} lg={3} style={{maxWidth:'285px'}}> <div style={{borderRadius:'10px'}} className='pt-3 bg-white shadow'><h2 className="text-center">Marketing</h2> <p className="text-center"> Lorem ipsum dolor sit amet consectetur  </p> <p className="text-center text-primary pb-3"><strong>088 9950 009</strong></p></div></Col>
              </Row>
          </div>
      </section>
  )
}

export default ContactInfo