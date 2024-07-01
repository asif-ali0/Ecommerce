import React, { useContext } from 'react'
import './ProductDisplay.css'
import start_dull_icon from "../Assets/star_dull_icon.png"
import star_icon from "../Assets/star_icon.png"
import { ShopContext } from '../../context/ShopContext'
import { Link } from 'react-router-dom'




const ProductDisplay = (props) => {
    const {addToCart} = useContext(ShopContext)
    const {product} = props;
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-image-list">

                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />

            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt=''/>
            </div>

        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                {/* <img src={star_icon} alt='' /> */}
                <img src={start_dull_icon} alt='' />
                <p>122</p>



            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                  ${product.old_price}  

                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore architecto tenetur fuga totam facilis! Voluptatem vero, officiis laudantium autem tempora eos, cum sint ratione dolor, porro nulla! Beatae, doloremque! 
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div className="">S</div>
                    <div className="">M</div>
                    <div className="">L</div>
                    <div className="">XL</div>
                    <div className="">XXL</div>

                </div>

            </div>

           <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>

            <p className='productdisplay-right-category'><span>Category:</span>Women, T-shirt ,Crop Top </p>
            <p className='productdisplay-right-category'><span>Tags:</span>Modern,Latest</p>



            
        </div>  
    </div>
  )
}

export default ProductDisplay
