import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import useAuthentication from '../hooks/useAuthentication'
import defaultRegisterValues from '../utils/defaulRegisterValues'
import '../pages/styles/register.css'
import Modal from '../components/shared/Modal'



const Register = () => {

    const { register, handleSubmit,reset} = useForm()
    
    const { createNewUser, errorModalOpen, setErrorModalOpen } = useAuthentication()

    const submit = data => {
        createNewUser(data)
        reset(defaultRegisterValues)
    }

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    return (
        <div className='register'>
        <form onSubmit={handleSubmit(submit)} className='register_form'>
            <h2 className='register-title'> Create a new user</h2>
            <div className='register-container'>
                <input 
                onChange={handleInputChange} 
                required
                className={`register-input ${inputValue ? 'valid' : ''}`} 
                name='text' 
                {...register('firstName')} type="text" id='firstName'  />
                <label className='register-label' htmlFor="firstName">First Name</label>
            </div>
            <div className='register-container'>
                <input 
                onChange={handleInputChange} 
                required
                className={`register-input ${inputValue ? 'valid' : ''}`} 
                name='text' 
                {...register('lastName')} type="text" id='lastName' />
                <label className='register-label' htmlFor="lastName">Last Name</label>
            </div>
            <div className='register-container'>
                <input 
                onChange={handleInputChange} 
                required
                className={`register-input ${inputValue ? 'valid' : ''}`} 
                name='text' 
                {...register('email')} type="email" id='email' />
                 <label className='register-label' htmlFor="email">Email</label>
            </div>
            <div className='register-container'>
                <input 
                onChange={handleInputChange} 
                required
                className={`register-input ${inputValue ? 'valid' : ''}`} 
                name='text' 
                {...register('password')} type="password" id='password' />
                <label className='register-label' htmlFor="password">Password</label>
            </div>
            <div className='register-container'>
                <input 
                onChange={handleInputChange} 
                required
                className={`register-input ${inputValue ? 'valid' : ''}`} 
                name='text' 
                {...register('phone')} type="tel" id='phone' />
                 <label className='register-label' htmlFor="phone">Phone</label>
            </div>
            <button className='register-btn'>Register</button>
        </form>
        {errorModalOpen && (
                <div className='login-modal'><Modal
                    setErrorModalOpen={setErrorModalOpen}
                    text1={'Error creating user'}
                    text2='Mail already exists Try a new one'
                /> </div>
            )}
        </div>
    )
}

export default Register