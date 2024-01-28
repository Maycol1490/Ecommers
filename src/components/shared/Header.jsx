import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../pages/styles/Header.css'
import Cart from '../../pages/Cart';

const Header = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [navMobile, setNavMobile] = useState('block')
    const [isCartOpen, setIsCartOpen] = useState(false);



    const nav = {
        display: `${navMobile}`
    }
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen)
        if (!isNavOpen) {
            setNavMobile('none')
        } else {
            setNavMobile('block')
        }
    };

    const toggleOpenCart = () => {
        setIsCartOpen(!isCartOpen)
        if(!isCartOpen){
        setNavMobile('none')
        }else{
            setNavMobile('block')
        }
    }

    return (
        <header className='header'>
            <h1 className='header_title'>
                <Link to='/'>E-commers</Link>
            </h1>
            <nav className='header_nav' style={nav}>
                <ul>
                    <li className='header_login'>
                        <Link to='/login'><i className='bx bxs-user header_icon'></i> Login</Link>
                    </li>
                    <li className='header_register'>
                        <Link to='/register'><i className='bx bxs-user-plus header_icon'></i>Register</Link>
                    </li>
                    <li className='header_purchases'>
                        <Link to='/purchases'><i className='bx bxs-purchase-tag header_icon'></i>purchases</Link>
                    </li>
                    <li className='header_cart' onClick={toggleOpenCart}>
                        <i className='bx bxs-cart header_icon'></i>cart
                    </li>
                </ul>
            </nav>
            <div className='navbar-toggle' onClick={toggleNav}>
                <button className="menu__icon btn-navbar">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className='header_modal_cart'>
                <Cart isCartOpen={isCartOpen} onCartClose={toggleOpenCart} toggleOpenCart={toggleOpenCart} />
            </div>
        </header>
    )
}

export default Header







