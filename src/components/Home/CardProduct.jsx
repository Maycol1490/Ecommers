import React from 'react'
import '../../pages/styles/home.css'
import { useNavigate } from 'react-router-dom'
import useCrudCart from '../../hooks/useCrudCart'

const CardProduct = ({ product }) => {

  const navigate = useNavigate()
  const {addProductToCart }= useCrudCart()

  const hadleSelectProduct = () => {
    navigate(`/product/${product.id}`)
  }

  const hadleSelectCart = e => {
    e.stopPropagation()
    const data ={
      quantity : 1 ,
      productId: product.id
    }
    addProductToCart(data)
  }

  return (
    <article className='product_card' onClick={hadleSelectProduct}>
      <header className='product_header'>
        <img className='product_img product_img-1' src={product.images[0].url} alt="" />
        <img className='product_img product_img-2' src={product.images[1].url} alt="" />
      </header>
      <footer className='product_footer'>
      <section className='product_section'>
        <h4 className='product_subtitle'>{product.brand}</h4>
        <h2 className='product_title'>{product.title}</h2>
      </section>
      <div className='product_price'>
        <h4 className='product_price-label'>price</h4>
        <h2 className='product_price-value'>{product.price}</h2>
      </div>
      </footer>
      <div className="container-button" onClick={hadleSelectCart}>
        <div className="hover bt-1"></div>
        <div className="hover bt-2"></div>
        <div className="hover bt-3"></div>
        <div className="hover bt-4"></div>
        <div className="hover bt-5"></div>
        <div className="hover bt-6"></div>
        <button className='product_btn' onClick={hadleSelectCart} >
        <i className='bx bxs-cart product_btn-icon'></i>
        </button>
      </div>
    </article>
  )
}


export default CardProduct