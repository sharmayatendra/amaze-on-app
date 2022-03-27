import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

function Nav() {
return (
<header className="header">
  <div className="header-left-icons">
    <Link to="/">
    <p className="header-heading">AMAZE-ON</p>
    </Link>
  </div>
  <div className="header-right-icons">
    <Link to="/login"><button className="btn btn-primary-solid header-btn">Login</button></Link>
    <div className="badge-flex-container">
      <div className="badge-container">
        <Link to="/cart"><span className="material-icons-outlined icon-small">shopping_cart</span></Link>
        <span className="badge icon-badge">4</span>
      </div>
      <div className="badge-container">
        <Link to="/wishlist"><span className="material-icons-outlined icon-small">favorite_border</span></Link>
        <span className="badge icon-badge">0</span>
      </div>
    </div>
  </div>
</header>
)
}

export { Nav }