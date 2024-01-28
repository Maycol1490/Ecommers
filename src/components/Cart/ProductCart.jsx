import React from 'react'
import useCrudCart from '../../hooks/useCrudCart'
import '../../pages/styles/cart.css'

const ProductCart = ({ prodCart }) => {


    const { deleteProductFromCart } = useCrudCart()
    const handleDeleteCart = () => {
        deleteProductFromCart(prodCart.id)
    }

    return (
        <article className='cart-card'>
            <header className='cart-card-container'>
                <div className='cart-card-container-images'>
                    <img className='cart-card-images' src={prodCart.product.images[0].url} alt="" />
                </div>
                <section className='cart-card-body'>
                    <h3 className='cart-card-body-title'>{prodCart.product.title}</h3>
                    <footer className='cart-card-body-footer'>
                        <span className='cart-card-body-quantity'>{prodCart.quantity}</span>
                        <div className='cart-card-body-price'>
                            <span className='cart-card-body-price-title'>SubTotal </span>
                            <span className='cart-card-body-price-valor'>{prodCart.product.price}</span>
                        </div>
                    </footer>
                    <button className='cart-card-body-btn' onClick={handleDeleteCart}>
                        <i className='bx bx-trash'></i>
                    </button>
                </section>
            </header>
        </article>
    )
}

export default ProductCart