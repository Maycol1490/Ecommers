import React, { useEffect } from 'react'
import usePurchases from '../hooks/usePurchases'
import ProductPurchases from '../components/Purchases/ProductPurchases'
import '../pages/styles/purchases.css'

const Purchases = () => {

    const { purchases, getAllProductsPurchases } = usePurchases()

    useEffect(() => {
        getAllProductsPurchases()
    }, [])

    return (
        <div className='purchases'>
            <h2 className='purchases-title'>Purchases</h2>
            <div className='purchases-container'>
                {
                    purchases?.map(prodPurchase =>(
                        <ProductPurchases
                        key={prodPurchase.id}
                        prodPurchase={prodPurchase}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Purchases