import React from 'react'
import { useCart } from '../../context/cart-context'
import { Link } from 'react-router-dom'
import "./ProductCard.css"
function ProductCard({product , addToCart}) {

    const { cartItems } = useCart()
return (
    <>
     <div className="card">
        <div className="card-wrapper">
            <div className="card-img img-rel">
                <img src={product.img} alt="mobile" />
                <i className="fas fa-heart dismiss-btn"></i>
            </div>
            <div className="card-heading-wrapper">
                <h2 className="card-main-heading">{product.title}</h2>
                <h3 className="card-sub-heading gray-text">{product.model}</h3>
            </div>
            <div className="card-content">
                <div className="rating">{product.rating}<i className="far fa-star star-icon"></i></div>
                <div className="price-container">
                    <h2>₹{product.discountedPrice}</h2>
                    <p className="strike-price">₹{product.originalPrice}</p>
                    <p className="discount">{product.discount}% off</p>
                </div>
            </div>
        </div>
        <footer className="card-footer">
            <div className="card-footer-btn add-cart">
                {cartItems.find(ele => ele._id === product._id) ?<Link to="/cart"><button className="card-btn">Go to Cart</button></Link> : <button className="card-btn" onClick={addToCart} >Add to Cart</button>}
                {/* <button className="card-btn">Buy Now</button> */}
            </div>
        </footer>
    </div> 
</>
)
}

export { ProductCard }