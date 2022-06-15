import React from 'react'
import axios from 'axios'
import { toast } from "react-toastify"
import { Nav, WishlistCard } from "../../components/index" 
import { useAuth, useWishlist , useCart , removeFromWishlistHandler} from '../../context'
import "./Wishlist.css"

function Wishlist() {
  const { wishlistItems } = useWishlist()
  const { setCartItems } = useCart()
  const {state: {token}} = useAuth()

  const moveToCartHandler = async (product) => {
    try {
      const resp = await axios.post('/api/user/cart' , { product } , {
        headers: { authorization: token}
      })
      toast.success("Item added to cart")
      setCartItems(resp.data.cart)
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className='container-wishlist'>
      <Nav />
      <section class="wishlist-container">
            <h1>My Wishlist</h1>
            <article class="wishlist-card-container">
              {wishlistItems.length > 0 ? wishlistItems.map(item => <WishlistCard product={item} moveToCart={() => moveToCartHandler(item)} removeFromWishlist={removeFromWishlistHandler}/>) : <h2>No items in wishlist😥😥</h2>}
            </article>
            </section>
    </div>
  )
}

export { Wishlist }