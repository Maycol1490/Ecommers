import React, { useState } from 'react'
import useAuthentication from '../hooks/useAuthentication'
import '../pages/styles/login.css'
import Modal from '../components/shared/Modal';




const Login = () => {


    const { loginUser, errorModalOpen, setErrorModalOpen } = useAuthentication();

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const data = { email, password }
        loginUser(data)
        e.target.reset()
    }

    const [inputStyle, setinputStyle] = useState('')
    const handleInputChange = (event) => {
        setinputStyle(event.target.value);
    };

    return (
        <div className='login'>
        <form onSubmit={handleLogin} className='login_form'>
            <h2 className='login-title'>Login</h2>
            <div className='login-input'>
                <input onChange={handleInputChange}
                    required type="email" id='email' />
                <label htmlFor="email">
                    <span style={{ transitionDelay: '0 ms' }}>E</span>
                    <span style={{ transitionDelay: '50 ms' }} >m</span>
                    <span style={{ transitionDelay: '100 ms' }} >a</span>
                    <span style={{ transitionDelay: '150 ms' }} >i</span>
                    <span style={{ transitionDelay: '200 ms' }} >l</span>
                </label>
            </div>
            <div className='login-input'>
                <input onChange={handleInputChange}
                    required type="password" id='password' />
                <label htmlFor="password">
                    <span style={{ transitionDelay: '0 ms' }}>P</span>
                    <span style={{ transitionDelay: '50 ms' }} >a</span>
                    <span style={{ transitionDelay: '100 ms' }} >s</span>
                    <span style={{ transitionDelay: '150 ms' }} >s</span>
                    <span style={{ transitionDelay: '200 ms' }} >w</span>
                    <span style={{ transitionDelay: '0 ms' }}>o</span>
                    <span style={{ transitionDelay: '50 ms' }} >r</span>
                    <span style={{ transitionDelay: '100 ms' }} >d</span>
                </label>
            </div>
            <button className='login-btn'>login</button>
        </form>
            {errorModalOpen && (
                <div className='login-modal'><Modal
                    setErrorModalOpen={setErrorModalOpen}
                    text1={'LOGIN ERROR'}
                    text2='The email or password is incorrect, please verify'
                /> </div>
            )}
        </div>
    )
}

export default Login