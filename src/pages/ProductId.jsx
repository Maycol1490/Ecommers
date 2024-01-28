import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductIdInf from '../components/ProductId/ProductIdInf'
import ProductIdImg from '../components/ProductId/ProductIdImg'
import ProductIdOther from '../components/ProductId/ProductIdOther'
import '../pages/styles/productId.css'

const ProductId = () => {


    const { id } = useParams()

    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
    const [product, getProductById] = useFetch(url)


    useEffect(() => {
        getProductById()
    }, [id])

    return (
        <div className='product-id'>
            <div className='product-id-body'>
                <ProductIdImg product={product} />
                <ProductIdInf product={product} />
            </div>
            <div className='product-id-footer'>
                <ProductIdOther product={product} />
            </div>
        </div>
    )
}

export default ProductId