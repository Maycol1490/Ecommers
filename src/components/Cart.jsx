import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from '../store/slices/cart.slice'
import '../styles/cart.css'

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const userId = localStorage.getItem('userId')

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const handleCheckout = () => {
    if (!userId) {
      alert("You must log in to purchase.")
      window.location.href = "/login"
      return
    }

    if (cart.length === 0) {
      alert("Your cart is empty.")
      return
    }

    // Crear nueva orden
    const newOrder = {
      id: Date.now(),
      userId,
      items: cart,
      total,
      date: new Date().toLocaleString()
    }

    // Guardar en localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || []
    existingOrders.push(newOrder)
    localStorage.setItem("orders", JSON.stringify(existingOrders))

    // Vaciar carrito
    dispatch(clearCart())

    alert("Purchase made successfully. 🎉")
  }

  return (
    <section className='cart'>
      <h2>Shopping cart</h2>
      {
        cart.length === 0
          ? <p>Your cart is empty.</p>
          : cart.map(product => (
              <div key={product.id} className='cart-item'>
                <img src={product.image} alt={product.title} />
                <div>
                  <h4>{product.title}</h4>
                  <p>${product.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
                    <span>{product.quantity}</span>
                    <button onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(product.id))}
                    className='remove-btn'
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
      }
      {
        cart.length > 0 && (
          <>
            <h3 className='total'>Total: ${total.toFixed(2)}</h3>
            <button className="checkout-btn" onClick={handleCheckout}>
              Finalizar compra
            </button>
          </>
        )
      }
    </section>
  )
}

export default Cart