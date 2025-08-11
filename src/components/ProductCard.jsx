import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/slices/cart.slice'
import { Link } from 'react-router-dom'
import '../styles/ProductCard.css'


const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h4>{product.title}</h4>
        <p>${product.price}</p>
      </Link>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  )
}

export default ProductCard