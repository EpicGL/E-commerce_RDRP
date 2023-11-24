import React from 'react'
import { Row, Col } from 'react-bootstrap'
import harveryCEO from '../../assets/img/herveyCEO.jpg'
import jsssicaCOO from '../../assets/img/jesicaCOO.jpg'
import rachelMH from '../../assets/img/rachelMH.jpg'
import luiseLD from '../../assets/img/luiseLD.jpg'
import edwardID from '../../assets/img/edwardID.jpg'
import mikeID from '../../assets/img/mikeID.jpg'

const OurTeam = () => {
  return (
      <section className='bg-white'>
          <div className="container pt-5">
              <h3 className='pt-3 text-center'>A Few Words About</h3>
              <h1 className='pt-1 text-center'> Out Team</h1>
              <p className='pt-1 text-center'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quam fugiat dolorum deserunt incidunt id esse qui ratione deleniti. Sit, quibusdam tempore! Ducimus dolorem cum, reiciendis voluptates impedit qui doloremque?</p>
              <Row>
                  
              <Col className='p-3' sm={12} md={6} lg={4}>
                      <div className='pt-4' style={{ backgroundColor: '#f0f0f0' }}>
                          <div className='d-flex justify-content-center pt-3 pb-4 '>
                            <img style={{maxWidth:'50%', borderRadius:'50%'}} src={harveryCEO} alt="Harvery-CEO"/>  
                          </div>    
                          <h4 className='text-black text-center'>Harvey Spector</h4>
                          <p className='text-black text-center pb-4'>Founder - CEO</p>
                      </div>
                  </Col>
                  
                  <Col className='p-3' sm={12} md={6} lg={4}>
                      <div className='pt-4' style={{ backgroundColor: '#f0f0f0' }}>
                          <div className='d-flex justify-content-center pt-3 pb-4 '>
                            <img style={{maxWidth:'50%', borderRadius:'50%'}} src={jsssicaCOO} alt="Jessica-COO"/>  
                          </div>    
                          <h4 className='text-black text-center'>Jessica Simpson</h4>
                          <p className='text-black text-center pb-4'>COO</p>
                      </div>
                  </Col>
                  
                  <Col className='p-3' sm={12} md={6} lg={4}>
                      <div className='pt-4' style={{ backgroundColor: '#f0f0f0' }}>
                          <div className='d-flex justify-content-center pt-3 pb-4 '>
                            <img style={{maxWidth:'50%', borderRadius:'50%'}} src={rachelMH} alt="Rachel-MH"/>  
                          </div>    
                          <h4 className='text-black text-center'>Rachel Zain</h4>
                          <p className='text-black text-center pb-4'>Marketing Head</p>
                      </div>
                  </Col>
                  
                  <Col className='p-3' sm={12} md={6} lg={4}>
                      <div className='pt-4' style={{ backgroundColor: '#f0f0f0' }}>
                          <div className='d-flex justify-content-center pt-3 pb-4 '>
                            <img style={{maxWidth:'50%', borderRadius:'50%'}} src={luiseLD} alt="luise-ld"/>  
                          </div>    
                          <h4 className='text-black text-center'>Luise Litt</h4>
                          <p className='text-black text-center pb-4'>Lead Developer</p>
                      </div>
                  </Col>
                  
                  <Col className='p-3' sm={12} md={6} lg={4}>
                      <div className='pt-4' style={{ backgroundColor: '#f0f0f0' }}>
                          <div className='d-flex justify-content-center pt-3 pb-4 '>
                            <img style={{maxWidth:'50%', borderRadius:'50%'}} src={mikeID} alt="mike-id"/>  
                          </div>    
                          <h4 className='text-black text-center'>Mike Ross</h4>
                          <p className='text-black text-center pb-4'>Intern Designer</p>
                      </div>
                  </Col>
                  
                  <Col className='p-3' sm={12} md={6} lg={4}>
                      <div className='pt-4' style={{ backgroundColor: '#f0f0f0' }}>
                          <div className='d-flex justify-content-center pt-3 pb-4 '>
                            <img style={{maxWidth:'50%', borderRadius:'50%'}} src={edwardID} alt="edword-id"/>  
                          </div>    
                          <h4 className='text-black text-center'>Loren Edward</h4>
                          <p className='text-black text-center pb-4'>Intern Designer</p>
                      </div>
                  </Col>
              </Row>
              
          </div>
      </section>
  )
}

export default OurTeam