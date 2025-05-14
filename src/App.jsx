
import { useState,useEffect } from 'react'
import Acount from '../component/Acount'
import Cart from '../component/Cart'
import Home from '../component/Home'
import Navbar from '../component/Navbar'
import ProductDesc from '../component/ProductDesc'
import SearchResults from '../component/SearchResults'
import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { CartProvider } from '../component/CartContext'
import ProtectedRoute from '../component/protectedRoute'
import Footer from '../component/Footer'

function App() {
// const location = useLocation()
// const navigate = useNavigate()

// useEffect(() => {
//   if (location.pathname !== '/') {
//     navigate('/');
//   }
// }, []);

  return (
    <>
    <CartProvider>
    <Router basename="/E-commerce">
      <Navbar/>
      <Routes>
        <Route path='/search/:query' element={<SearchResults/>} />
      <Route path='/'  element={<Home/>} />
      <Route path='/items/:id' element={<ProductDesc/>} />
      <Route path='/Acount' element={<Acount/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/checkout' element={
        <ProtectedRoute>
          <Cart/>
        </ProtectedRoute>
      }/>
       <Route path="*" element={<Home />} />
      </Routes>
    </Router>
    </CartProvider>
      <Footer/>
    </>
  )
}

export default App
