import React from 'react'
import { useNavigate , Link} from 'react-router-dom'
import { useAuth, useWishlist } from '../../context'
import "./CartCard.css"

function CartCard({product , cartQuantityHandler , cartRemoveHandler , wishlistHandler}) {
    
    const {state:{token}} = useAuth()
    const {wishlistItems,setWishlistItems} = useWishlist()
    const navigate = useNavigate()

return (
<div className="card cart-card">
    <div className="card-wrapper">
        <div className="card-img">
            <img src={product.img} alt="mobile" />
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
                <div className="quantity">
                    <span className="quantity-heading">Quantity:</span>
                    {product.qty === 1 ? 
                   <button disabled className="material-icons-outlined plus-icon qty-btn" onClick={() => cartQuantityHandler(product._id,"decrement")}>
                        remove_circle_outline
                    </button> : <button className="material-icons-outlined plus-icon qty-btn" onClick={() => cartQuantityHandler(product._id,"decrement")}>
                        remove_circle_outline
                    </button>} 
                    <span className="quantity-val">{product.qty}</span>
                    <span className="material-icons-outlined minus-icon" onClick={() => cartQuantityHandler(product._id,"increment")}>
                        add_circle_outline
                    </span>
                </div>
            </div>
        </div>
    </div>
    <footer className="card-footer">
        <div className="card-footer-btn">
            <button className="card-btn cart-card-btn" onClick={() => cartRemoveHandler(product._id)}>Remove from Cart</button>

            {wishlistItems.find(ele => ele._id === product._id) ? <Link to="/wishlist"><button className="card-btn cart-card-btn red-btn">Go to Wishlist</button></Link>: <button className="card-btn cart-card-btn" onClick={() => wishlistHandler(product , token , setWishlistItems , navigate)}>Add to Wishlist</button>}
            
        </div>
    </footer>
</div>
)
}

export { CartCard }