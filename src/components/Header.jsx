import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { logout } from '../store/slices/auth.slice'
import '../styles/header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const cart = useSelector(state => state.cart)
  const { token } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">FakeStore</Link>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

          <Link to="/cart" onClick={() => setMenuOpen(false)} className="cart-link">
            <ShoppingCart size={20} />
            <span className="cart-count">{cart.length}</span>
          </Link>

          {token ? (
            <>
              <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
              <button 
                onClick={() => {
                  handleLogout()
                  setMenuOpen(false)
                }} 
                className="logout-btn"
              >
                log out
              </button>
            </>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)}>Iniciar sesion</Link>
          )}
        </nav>

        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </header>
  )
}

export default Header