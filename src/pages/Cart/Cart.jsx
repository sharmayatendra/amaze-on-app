import React from 'react'
import axios from 'axios'
import './Cart.css'
import { toast } from "react-toastify"
import { Nav , CartCard , PriceCard} from '../../components/index'
import { useCart , useAuth , addToWishlistHandler } from '../../context/index'
function Cart() {

  const {cartItems,setCartItems} = useCart()
  const {state: {token}} = useAuth()

  const cartQuantityHandler = async (productId , updatetype) => {
    try {
      const resp = await axios.post(`api/user/cart/${productId}` , {
        action: {
        type: updatetype
  }
      } , { headers : {authorization : token}})
      toast.info("Cart quantity updated")
      setCartItems(resp.data.cart)
    } catch(err) {
      console.log(err);
    }
  }

  const cartRemoveHandler = async (productId) => {
    try {
      const resp = await axios.delete(`api/user/cart/${productId}` , {
        headers: {authorization : token}
      })
      toast.success("Item remove from cart")
      setCartItems(resp.data.cart)
    } catch(err) {
      console.log(err);
    }
  }
  return (
    <div className='container-cart'>
        <Nav />
        <section className="main-cart-section">
            <h1>My Cart({cartItems.length} items)</h1>
            <article className="cart-card-container">
                {cartItems.map(item => <CartCard product={item} cartQuantityHandler={cartQuantityHandler} cartRemoveHandler={cartRemoveHandler} wishlistHandler={addToWishlistHandler} key={item._id}/>)}
                {cartItems.length > 0 ? <PriceCard /> : <h3>No items in the cart😢😥</h3>}
            </article>
            </section>
    </div>
  )
}

export { Cart }