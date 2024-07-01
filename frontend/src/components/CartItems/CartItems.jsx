import React, { useContext } from 'react'
import './CartItems.css'
import remove_icon from '../Assets/cart_cross_icon.png'

import { ShopContext } from '../../context/ShopContext'
import { Link } from 'react-router-dom'
const CartItems = () => {

const {all_product,cartItems,removeToCart,getTotalCartAmount} = useContext(ShopContext)
console.log(getTotalCartAmount())

  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />

        {all_product.map((e,key)=>{
            if(cartItems[e.id] > 0){

            return <>
                    <div>
                            <div className="cartitems-format">
                                <img src={e.image} alt='' className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price*cartItems[e.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeToCart()}} alt='' />
                            </div>


                    </div>
                    <hr />
                    </>

            }
            return null;
})}

        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className='cartitems-total-item'>
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>

                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>

                </div>
            <Link to='/payment'><button>PROCEED TO CHECKOUT </button></Link>
            </div>
            <div className="cartitems-promocode">
                <div className="cartitems-promobox">
                    <input type='text' placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>



      
    </div> 
  )
}

export default CartItems;
