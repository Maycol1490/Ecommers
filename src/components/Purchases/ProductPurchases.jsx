import React from 'react'

const ProductPurchases = ({ prodPurchase }) => {


    return (
        <article className='purchases-card'>
            <div className='purchases-card-images'>
                <img className='purchases-images' src={prodPurchase.product.images[0].url} alt="" />
            </div>
            <h3 className='purchases-title-card'>{prodPurchase.product.title}</h3>
            <span className='purchases-quantity'>Quantity : {prodPurchase.quantity}</span>
            <span className='purchases-price'>Price : {prodPurchase.quantity * prodPurchase.product.price}</span>
        </article>
    )
}

export default ProductPurchases