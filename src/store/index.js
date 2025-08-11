import { configureStore } from '@reduxjs/toolkit'
import products from './slices/products.slice'
import cart from './slices/cart.slice'
import loadingReducer from './slices/loading.slice';
import authReducer from './slices/auth.slice';
import ordersReducer from "./slices/orders.slice"; 



export default configureStore({
  reducer: {
    products,
    cart,
    loading: loadingReducer,
    auth: authReducer,
    orders: ordersReducer 
  }
})