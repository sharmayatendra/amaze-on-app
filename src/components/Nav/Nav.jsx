import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify"
import { useAuth, useWishlist } from '../../context'
import { useCart } from '../../context/cart-context'
import "./Nav.css"

function Nav() {
  const {state: {isAuth} , dispatch} = useAuth()

  const {cartItems} = useCart()
  const {wishlistItems} = useWishlist()

  const logoutHandler = () => {
    localStorage.clear()
    toast.success("Loggedout successfully")
    dispatch({type: 'CLEAR'})
  }
return (
<header className="header">
  <div className="header-left-icons">
    <Link to="/">
    <p className="header-heading">AMAZE-ON</p>
    </Link>
  </div>
  <div className="header-right-icons">
    {isAuth ? <Link to="/login"><button className="btn btn-primary-solid header-btn" onClick={logoutHandler}>Logout</button></Link>:<Link to="/login"><button className="btn btn-primary-solid header-btn">Login</button></Link>}
    <div className="badge-flex-container">
      <div className="badge-container">
        <Link to="/cart"><span className="material-icons-outlined icon-small">shopping_cart</span></Link>
        <span className="badge icon-badge">{cartItems.length}</span>
      </div>
      <div className="badge-container">
        <Link to="/wishlist"><span className="material-icons-outlined icon-small">favorite_border</span></Link>
        <span className="badge icon-badge">{wishlistItems.length}</span>
      </div>
    </div>
  </div>
</header>
)
}

export { Nav }