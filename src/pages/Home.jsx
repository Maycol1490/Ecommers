import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProductsThunk } from '../store/slices/products.slice'
import ProductCard from '../components/ProductCard'
import FilterCategory from '../components/FilterCategory'
import '../styles/home.css'

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, [])

  return (
    <div>
      <FilterCategory />
      <div className="products-container">
        {products.map(prod => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  )
}

export default Home