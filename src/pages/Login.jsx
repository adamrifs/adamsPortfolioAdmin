import axios from 'axios'
import React, { useState } from 'react'
import { serverUrl } from '../urls'
import '../css/Login.css'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

const Login = ({ setToken }) => {
    const nav = useNavigate()
    const [isLogin, setIsLogin] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleLoginChange = () => {
        setIsLogin(true)
        setEmail('')
        setPassword('')
    }

    const handleSignupChange = () => {
        setIsLogin(false)
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(serverUrl + 'admin/adminLogin', { email, password }, { withCredentials: true })
            if (response.data.token) {
                Cookies.set('jwt', response.data.token, {
                    expires: 5
                })
                setToken(response?.data?.token)
            }
            nav('/admin')
            alert('login succesfull')
            console.log(response)
        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }

    const handleSignUp = async () => {
        try {
            const response = await axios.post(serverUrl + 'admin/adminRegister', { email, password })
            alert('signup succesfull')
            setIsLogin(true)

        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }
    return (
        <div className='admin-login-container'>
            {
                isLogin ? (
                    <div className="admin-login-box">
                        <h1>Adam's Portfolio Login</h1>
                        <div className="admin-login-input">
                            <input type='email'
                                placeholder='Enter email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <input type='password'
                                placeholder='Enter password'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password} />
                            <button onClick={handleLogin}>Login</button>
                            <p onClick={handleSignupChange}>Sign Up</p>
                        </div>
                    </div>
                ) : (
                    <div className="admin-login-box">
                        <h1>Adam's Portfolio SignIn</h1>
                        <div className="admin-login-input">
                            <input type='email'
                                placeholder='Enter email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <input type='password'
                                placeholder='Enter password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <input type='password'
                                placeholder='Confirm password'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)} />
                            <button onClick={handleSignUp}>Sign In</button>
                            <p onClick={handleLoginChange}>Login</p>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Login