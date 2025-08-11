import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { getAllProductsThunk } from '../store/slices/products.slice'
import '../styles/filterCategory.css'

const FilterCategory = () => {
  const dispatch = useDispatch()
  const url = 'https://fakestoreapi.com/products/categories'
  const [categories, getCategories] = useFetch(url)

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <div className="categories-container">
      <h3>Categories</h3>
      <ul>
        <li onClick={() => dispatch(getAllProductsThunk())}>All</li>
        {
          categories?.map(cat => (
            <li key={cat} onClick={() =>
              dispatch(getAllProductsThunk(`https://fakestoreapi.com/products/category/${cat}`))
            }>{cat}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default FilterCategory
