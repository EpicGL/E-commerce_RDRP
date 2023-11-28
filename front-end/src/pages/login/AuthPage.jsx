import React, { useEffect, useState } from 'react'
import { Row, Col} from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import Login from './Login';
import { Register } from './Register';

const AuthPage = () => {
    const [authFrom, setAuthFrom] = useState('login')    
    const location = useLocation();
    const page = location.pathname
    
    
    
    useEffect(() => {
        document.body.style.backgroundColor = '#14618F'
        if (page == '/register') {
            setAuthFrom('register')
        } else {
            setAuthFrom('login')

        }
    }, [page])




    return (
        <section>
            <div className="container">    
                <Row className={authFrom == 'login' ? 'justify-content-center login-card' : 'justify-content-center register-card'}>

                    <Col ms={11} md={8} lg={5}>
                        <div className="card card-body shadow ">

                            {/* Login Form */}
                            <div className={authFrom != 'login' ? 'd-none' : ''} >
                                {<Login/>}
                            </div>

                            {/* Register Form */}
                            <div className={authFrom != 'register' ? 'd-none' : ''}>
                                {< Register />}
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default AuthPage