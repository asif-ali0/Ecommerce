import React from 'react'
// import './ShopCategory.css'
import './ShopCategory.css'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item'
const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img src={props.banner} alt='' className='shopcategory-banner'></img>
      <div className='shopcategory-indexsort'>
        <p>
          <span>Showing 1-12</span> Out of 36 Products
        </p>
        <div className='shop-category-sort'>
          sort by <img src={dropdown_icon} alt='' />

        </div>
      </div>
      <div className='shopcategory-products'>
        {all_product.map((item,index)=>{
          if(props.category === item.category ){
            return <Item  key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            

          }

          else{
            
            return null
            
          }

        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
      
    </div>
  )
}

export default ShopCategory
