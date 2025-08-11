import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/slices/cart.slice'
import '../styles/productDetails.css'
import { Link } from 'react-router-dom'

const ProductDetails = () => {
  const { id } = useParams()
  const productUrl = `https://fakestoreapi.com/products/${id}`
  const [product, getProduct] = useFetch(productUrl)

  const [allProducts, getAllProducts] = useFetch("https://fakestoreapi.com/products")
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    getProduct()
    getAllProducts()
  }, [id])

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(product))
    }
  }

  const increase = () => setQuantity(prev => prev + 1)
  const decrease = () => {
    if (quantity > 1) setQuantity(prev => prev - 1)
  }

  const similarProducts = allProducts?.filter(p =>
    p.category === product?.category && p.id !== product.id
  )

  return product ? (
    <div className="product-details">
      <h2>{product.title}</h2>

      <div className="zoom-container">
        <img src={product.image} alt={product.title} className="zoom-image" />
      </div>

      <p>{product.description}</p>
      <h4>${product.price}</h4>

      <div className="quantity-controls">
        <button onClick={decrease}>-</button>
        <span>{quantity}</span>
        <button onClick={increase}>+</button>
      </div>

      <button className="add-cart" onClick={handleAddToCart}>
        Add to Cart
      </button>

      {/* Productos similares */}
      {similarProducts?.length > 0 && (
        <div className="similar-products">
          <h3>Productos Similares</h3>
          <div className="similar-container">
            {similarProducts.map(item => (
            <Link to={`/product/${item.id}`} className="similar-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.title.slice(0, 30)}...</p>
            <span>${item.price}</span>
            </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  ) : (
    <p className="loading">Cargando producto...</p>
  )
}

export default ProductDetails