import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { getAllProductsThunk } from '../../store/slices/products.slice'
import { useDispatch } from 'react-redux'

const FilterCategory = () => {

    const dispatch = useDispatch()

    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'
    const [categories, getAllCategoties] = useFetch(url)

    useEffect (()=>{
        getAllCategoties()
    },[])

    const handleCategories = id => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
        dispatch(getAllProductsThunk(url))
        
    }

    const handleAllCategories = () => {
        dispatch(getAllProductsThunk())
    }

  return (
    <article className='category'>
        <h3 className='category-title'>CATEGORY</h3>
        <ul>
            <li onClick={handleAllCategories}>All products</li>
            {
                categories?.map(category => (
                    <li 
                    onClick={()=>handleCategories(category.id)}
                    key={category.id} 
                    >{category.name}</li>
                ))
            }
        </ul>
    </article>
  )
}

export default FilterCategory