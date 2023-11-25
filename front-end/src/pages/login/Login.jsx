import React, { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap' 
import { Link, useNavigate  } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate() 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const getToken = async () => {
        
        const user = { 'email': email, 'password': password };
        
        const url = 'http://127.0.0.1:8000/api/token/'
        const header = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }
        
        try {
            const res = await fetch(url,header)
            if (res.ok) {
                if (res.access !== null) {
                    const data = await res.json()
                    console.log(data)
                    localStorage.setItem('access', data.access)
                    localStorage.setItem('refresh', data.refresh)
                    
                    console.log('access: ' + localStorage.getItem('access'))
                    console.log('refresh: ' + localStorage.getItem('refresh'))
                    navigate('/')
                } else {
                    document.getElementById('message').innerText = 'Your Email or Password is wrong'
                }
            } else {
                console.log('bad request, error code: ' + res.statusText)
                document.getElementById('message').innerText = 'Your Email or Password is wrong'
            }
            
        } catch {
            console.log('No responce')
        }
        
    } 
    
    const handleLogin = async (e) => {
        e.preventDefault();
        if (email != '') {
            if (password != '') {
                
                getToken();
            } else {
                document.getElementById('message').innerText = 'You need to provide your password to contine'
            }            

        }else {
            document.getElementById('message').innerText = 'You need to provide your email to contine'
        }            
    }

    useEffect(() => {
        const access = localStorage.getItem('access')
        if (access != null) {
            console.log(access)
        }else{console.log('no Token for you')}
    },[])

    return (
        <section>
            <form onSubmit={handleLogin}>
                <h3 className='d-flex justify-content-center'>Login</h3>
                <input className='form-control mt-3' value={email} onChange={ (e) => setEmail(e.target.value)} type="email" name="email"  placeholder='Email...'/>
                <input className='form-control mt-3' value={password} onChange={(e)=> setPassword(e.target.value)} type="password" name="password" placeholder='Password...' />
                <input className='form-control btn btn-primary mt-3' type="submit" value="Login" />

                <div>
                    <p className='d-flex justify-content-center mt-3'> Do not have an account ? <Nav.Link className=' ms-2 text-primary' as={Link} to={'/register'}>Register </Nav.Link></p>
                    <p className='d-flex justify-content-center bg-warning' id='message'></p>
                </div>        
            </form>
        </section>
    )
}

export default Login