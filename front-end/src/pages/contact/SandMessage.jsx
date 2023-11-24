import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

const SandMessage = () => {
  return (
      <section className='container mt-5'>
          <Row>
              <Col sm={12} md={12} lg={6}>
                  <p className="pt-5 pb-2 mt-4">Don't be a stranger</p>
                  <h2>You tell us We listen</h2>
                  <p className='pe-5 pt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit animi ipsum perferendis labore, corrupti illum. Fugiat accusamus animi autem et laudantium accusantium, debitis possimus sapiente minima optio modi vitae.</p>
              </Col>


              <Col sm={12} md={12} lg={6} className='bg-white shadow'>
                  <Form className='p-4'>
                      <input name='name' type="text" className="form-control mt-3" placeholder='NAME' />
                      <input name='subject' type="text" className="form-control mt-3" placeholder='SUBJECT' />
                      <input name='email' type="email" className="form-control mt-3" placeholder='EMAIL' />
                      <textarea name="message" id="message" cols="30" rows="10" placeholder='MESSAGE' className='form-control mt-3'></textarea>
                      <button type='submit' className='btn-blue mt-3'>SEND MESSAGE</button>
                  </Form>
              </Col>


          </Row>
      </section>
  )
}

export default SandMessage