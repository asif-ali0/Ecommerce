import React, { useContext } from 'react'
import './Payment.css'
import { ShopContext } from '../../context/ShopContext'
import Address from '../Address/Address'


const Payment = () => {
    const {getTotalCartAmount,all_product,cartItems,addToCart,removeToCart,getTotalCartItems} = useContext(ShopContext)
    // alert(getTotalCartAmount)
  return (
    <div className='payment-container'>
        <div className="address-container">
            {/* <h1>payment options</h1> */}

            <Address />


        </div>
      
    </div>
  )
}

export default Payment
