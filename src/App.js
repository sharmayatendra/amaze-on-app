import React from 'react'
import {Homepage} from './pages/Homepage/Homepage'
import { ProductListing } from './pages/ProductListing/ProductListing'
import { Cart } from './pages/Cart/Cart'
import { Wishlist } from './pages/Wishlist/Wishlist'
import { Login } from './pages/Login/Login'
import { Signup } from './pages/Signup/Signup'
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
    </Routes>
  )
}

export  { App }