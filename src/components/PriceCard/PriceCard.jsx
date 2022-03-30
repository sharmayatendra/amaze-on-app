import React from 'react'
import { useCart } from '../../context/cart-context'
import "./PriceCard.css"
function PriceCard() {

    const {cartItems} = useCart()

    const totalAmount = (amount,currProduct) => {
        amount = amount + currProduct.qty * currProduct.originalPrice 
        return amount
    }

    const totalDiscount = (discount , currProduct) => {
        discount = discount + currProduct.originalPrice * currProduct.qty - currProduct.discountedPrice * currProduct.qty
        return discount
    }
    const totalAmountValue = cartItems.reduce(totalAmount,0)
    const totalDiscountvalue = cartItems.reduce(totalDiscount,0)
    const finalAmountValue = totalAmountValue - totalDiscountvalue
return (
<div className="card price-card">
    <h2>Price Details</h2>
    <hr />
    <ul className="list">
        <li className="list-item">Price ({cartItems.length} items)<span className="price-value">₹{totalAmountValue}</span></li>
        <li className="list-item">Discount<span className="price-value">-₹{totalDiscountvalue}</span></li>
        <li className="list-item">Delivery Charge<span className="price-value">Free</span></li>
        <hr />
        <li className="list-item list-item-bold">Total Amount<span className="price-value">₹{finalAmountValue}</span></li>
    </ul>
    <button className="btn btn-primary-solid">Place Order</button>
</div>
)
}

export { PriceCard }