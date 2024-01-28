import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/shared/Header'
import ProductId from './pages/ProductId'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'

function App() {


  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductId/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/purchases' element={<Purchases/>} />
      </Routes>
    </div>
  )
}

export default App
