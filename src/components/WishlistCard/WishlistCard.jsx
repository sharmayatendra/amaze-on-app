import React from 'react'
import { useAuth, useCart, useWishlist } from '../../context'
import "./WishlistCard.css"
import axios from 'axios'

function WishlistCard({product , moveToCart , removeFromWishlist}) {
    const {state: {token}} = useAuth()
    const { setWishlistItems } = useWishlist()
    const { cartItems ,setCartItems } = useCart()

    const cartQuantityHandler = async (productId , updatetype) => {
        try {
          const resp = await axios.post(`api/user/cart/${productId}` , {
            action: {
            type: updatetype
      }
          } , { headers : {authorization : token}})
          console.log(resp);
          setCartItems(resp.data.cart)
        } catch(err) {
          console.log(err);
        }
      }

     
  return (
      <>
    <div class="card">
                <div class="card-wrapper">
                    <div class="card-img img-rel">
                        <img src={product.img} alt="mobile" />
                        <i className="fas fa-heart dismiss-btn wishlist-icon-clr" onClick={() => removeFromWishlist(product._id , token , setWishlistItems)}></i>
                    </div>
                    <div class="card-heading-wrapper">
                        <h2 class="card-main-heading">{product.title}</h2>
                        <h3 class="card-sub-heading gray-text">{product.model}</h3>
                    </div>
                    <div class="card-content">
                        <div class="rating">4.7<i class="far fa-star star-icon"></i></div>
                        <div class="price-container">
                            <h2>₹{product.discountedPrice}</h2>
                            <p class="strike-price">₹{product.originalPrice}</p>
                            <p class="discount">{product.discount}% off</p>
                        </div>
                    </div>
                </div>
                {cartItems.find(ele => ele._id === product._id) ? <button class="btn btn-primary-solid wishlist-btn" onClick={() => cartQuantityHandler(product._id , "increment")}>Add to Cart</button> : <button class="btn btn-primary-solid wishlist-btn" onClick={moveToCart}>Add to Cart</button>}
                        
            </div>
           
            </>
  )
}

export { WishlistCard }