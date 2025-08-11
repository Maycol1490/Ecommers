import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Cart from './components/Cart'
import Header from './components/Header'
import Login from './pages/Login'
import Profile from "./pages/Profile"


function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Cart />
      </div>
    </>
  )
}

export default App