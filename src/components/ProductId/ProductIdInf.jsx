import React, { useState } from 'react'
import useCrudCart from '../../hooks/useCrudCart'

const ProductIdInf = ({ product }) => {


    const [quantity, setquantity] = useState(1)
    const { addProductToCart } = useCrudCart()


    const handlePlus = () => setquantity(quantity + 1)
    const handleMinus = () => {
        if (quantity - 1 >= 1) {
            setquantity(quantity - 1)
        }
    }

    const handleAddCart = () => {
        const data = {
            quantity,
            productId: product.id
        }
        addProductToCart(data)
    }


    return (
        <section className='product-id-inf'>
            <h3 className='product-id-inf-brand'>{product?.brand}</h3>
            <h2 className='product-id-inf-title'>{product?.title}</h2>
            <p className='product-id-inf-description'>{product?.description}</p>
            <footer className='product-id-inf-footer'>
                <div className='product-id-inf-price'>
                    <h3>price : </h3>
                    <h2>{product?.price}</h2>
                </div>
                <div className='product-id-inf-quantity'>
                    <div className='product-id-inf-btn'>
                        <button onClick={handleMinus}>-</button>
                        <div className='product-id-inf-btn-quantity'>{quantity}</div>
                        <button onClick={handlePlus}>+</button>
                    </div>
                </div>
                <div>
                    <button className='product-id-inf-btn-cart' onClick={handleAddCart}>add cart</button>
                </div>
            </footer>
        </section>
    )
}

export default ProductIdInf