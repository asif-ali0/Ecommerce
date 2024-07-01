import { createContext, useState } from "react";
import all_product from "../components/Assets/all_product";

import { useSearchParams } from "react-router-dom";



export const ShopContext = createContext(null)

const getDefaultCart = ()=>{

    let cart = {};
    for(let index = 0 ; index < all_product.length ; index ++){
        cart[index] = 0;
        // console.log(cart)
        

    }

    return cart;
}

const ShopContextProvider = (props)=>{

    const [cartItems,setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){

                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
                

            }
        }
        return totalAmount;


    }

    const getTotalCartItems = ()=>{
        let countItems = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){

                countItems += 1;

            }
        }
        return countItems;
    }
 
    // console.log(cartItems)

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))

        console.log(cartItems)
    }
    const removeToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue = {
        all_product,cartItems,addToCart,removeToCart,getTotalCartAmount,getTotalCartItems
    };



    


    return <ShopContext.Provider value={contextValue}>
                {props.children}

            </ShopContext.Provider>
}

export default ShopContextProvider;