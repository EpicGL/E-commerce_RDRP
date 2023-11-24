import React, { useEffect, useState } from 'react'
import { Row, Col, Dropdown, DropdownButton, DropdownHeader } from 'react-bootstrap'
import Item from './Item'


const Product = () => {
    const filters = {
        'startingprice': 0,
        'endprice': 10000,
    }

    const [filter , setFilter] = useState(filters)
    const [gender, setGender] = useState('None')
    const [accessories, setAccessories] = useState('None')
    const [products, setProduct] = useState([])

    const getProducts = async () => {
        let params = `?startingprice=${filter.startingprice}&endprice=${filter.endprice}`
        if (accessories != 'None') {
            params += `&accessories=${accessories}`
        }
        if (gender != 'None') {
            params += `&gender=${gender}`
        }

        const url = `http://127.0.0.1:8000/api/products/filter/${params}`
    
        try {
            const result = await fetch(url)
            if (result.ok && result.status != 404) {
                const data = await result.json()
                setProduct(data)
                console.log('fetched was sccessfull')
                console.log(data)
            } else {
                console.log('Bad Responce error code: ' + result.statusText)
            }
        } catch {
            console.log('Server Down')
        }
    }

    useEffect(() => {
        getProducts()
        console.log(gender)
    },[filter, gender, accessories])
    return (

        <section className='container' style={{padding:'3rem 0 0 0'}}>
            <Row >
                <Col sm={12} lg={2} className='d-flex flex-column top-0 ps-5 pe-5 ps-lg-0 pe-lg-0'>
                    <h4>Filter by Price</h4>
                    <div className='d-flex justify-content-between mt-3'>
                        <input onChange={(e)=> setFilter({...filter, 'startingprice':e.target.value.toString() })} className='form-control me-1' value={filter.startingprice} type="text" />
                        <input onChange={(e)=> setFilter({...filter, 'endprice':e.target.value.toString() })} className='form-control' value={filter.endprice} type="text" />
                    </div>
                    
                    <DropdownButton className='mt-3' title={gender == 'Male' ? 'Male' : 'Gender' && gender == 'Female' ? 'Female' : 'Gender'} id="dropdown-button-example">
                        <Dropdown.Item onClick={()=>setGender('Male')} eventKey="male">Male</Dropdown.Item>
                        <Dropdown.Item onClick={() => setGender('Female')} eventKey="female">Female</Dropdown.Item>
                        <Dropdown.Item onClick={() => setGender('None')} eventKey="None">None</Dropdown.Item>
                        
                    </DropdownButton>
                    
                    

                </Col>

                <Col sm={12} lg={10} className='mt-3 mt-lg-0'>
                    <Row style={{backgroundColor:'white'}} >
                        {products.map((product, index)=>(<Col className='d-flex justify-content-center' key={index} sm={12} md={6} lg={4}><Item children={product}/></Col>))}
                    </Row>
                </Col>
            </Row>
        </section>
  )
}

export default Product