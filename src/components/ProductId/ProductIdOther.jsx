import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import CardProduct from '../Home/CardProduct'

const ProductIdOther = ({ product }) => {


  const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${product?.categoryId}`

  const [filtreProducts,getProductByCategory] = useFetch(url)


  useEffect(() =>{
    if(product){
      getProductByCategory()
    }
  },[product])

console.log(product)
  return (
    <section className='product-id-other'>
      <h2 className='product-id-other-title'> Similar products</h2>
      <div className='product-id-other-body'>
        {
          filtreProducts?.map(prod =>{
            if(prod.id !== product.id){
              return (
                
                <CardProduct
                key={prod.id}
                product={prod}
                />
                
                ) 
                
            }
          })
        }
      </div>
    </section>
  )
}

export default ProductIdOther