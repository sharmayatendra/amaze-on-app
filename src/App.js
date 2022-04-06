import React from 'react'
import { Homepage, ProductListing, Cart, Wishlist, Login, Signup , Notfound} from './pages/index'
import Mockman from "mockman-js"
import { Routes , Route } from "react-router-dom"
const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/mock" element={<Mockman />}/>
    <Route path="/product" element={<ProductListing />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/wishlist" element={<Wishlist />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="*" element={<Notfound />} />
    </Routes>
  )
}

export  { App }