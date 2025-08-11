import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (_, action) => action.payload
  }
})

export const { setProducts } = productsSlice.actions

export const getAllProductsThunk = (url = 'https://fakestoreapi.com/products') => dispatch => {
  axios.get(url)
    .then(res => dispatch(setProducts(res.data)))
    .catch(err => console.error(err))
}

export default productsSlice.reducer