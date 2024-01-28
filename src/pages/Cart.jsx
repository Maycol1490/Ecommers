import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsCartThunk } from '../store/slices/cart.slice'
import ProductCart from '../components/Cart/ProductCart'
import usePurchases from '../hooks/usePurchases'
import '../pages/styles/cart.css'



const Cart = ({isCartOpen,toggleOpenCart}) => {

  const dispatch = useDispatch()
  const { buyThisCart } = usePurchases()

  useEffect(() => {
    dispatch(getAllProductsCartThunk())
  }, [])

  const { cartGlobal } = useSelector(state => state)

  const totalPriceCart = cartGlobal?.reduce((acc, cv) => acc + cv.quantity * cv.product.price, 0)

  const handlePurchase = () => {
    buyThisCart()
  }

  const modalStyle = {
    display: isCartOpen ? 'block' : 'none',
  };

  return (
    <div className='cart' style={modalStyle}>
      <div className='cart-container'>
        {
          cartGlobal?.map(prodCart => (
            <ProductCart
              key={prodCart.id}
              prodCart={prodCart}
            />
          ))
        }
      </div>
      <footer className='cart-footer'>
        <div className='cart-footer-body'>
        <span>Total :</span>
        <h3>{totalPriceCart}</h3>
        </div>
        <button className='cart-footer-btn' onClick={handlePurchase} >Buy Now</button>
      </footer>
    </div>
  )
}

export default Cart