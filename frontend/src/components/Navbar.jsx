import React, { useContext, useRef, useState } from 'react'

import './Navbar.css'
import all_product from './Assets/all_product'
import logo from './Assets/logo.png'
import cart_icon from './Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import drop_down from './Assets/dropdown_icon.png'


const Navbar = () => {
    const [menu,setMenu] = useState('')
    const {getTotalCartItems} =  useContext(ShopContext);
    const menuRef = useRef(null);

    const dropdownToggle = (e)=>{

      console.log('hello')
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open')
      

    }

  return (
    <div>
        <div className='navbar'>
            <div className='nav-logo'>
                <Link to='/'><img src={logo} alt='logo'  ></img></Link>
                <Link to='/'><p>SHOPPER</p></Link>
            </div>
            <img src={drop_down} alt='' className='dropdownicon'  onClick={(e)=>dropdownToggle(e)}/>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu('shop')}}><Link to = '/' style={{textDecoration:'none'}}>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
                <li onClick={()=>setMenu('mens')}><Link to='/mens' style={{textDecoration:'none'}}>Mens</Link> {menu==='mens'?<hr/>:<></>}</li>
                <li onClick={()=>setMenu('womens')}><Link to = '/womens' style={{textDecoration:'none'}}>Womens</Link> {menu==='womens'?<hr/>:<></>}</li>
                <li onClick={()=>setMenu('kids')}><Link to = '/kids' style={{textDecoration:'none'}}>Kids</Link> {menu==='kids'?<hr/>:<></>}</li>

            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button className=''>Login</button></Link>
              <Link to='/cart'><img src={cart_icon} alt='cartlogin'></img></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>


            </div>
        
        </div>
      
    </div>
  )
}

export default Navbar

