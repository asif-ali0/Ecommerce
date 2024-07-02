// import logo from './logo.svg';
import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import shop from './pages/shop';
import ShopCategory from './pages/ShopCategory';
import Shop from './pages/Shop';
import Product from './pages/Product';
import LoginSignUp from './pages/LoginSignUp';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'
import Payment from './components/Payment/Payment';

const url = 'https://ecommerce-72h2.onrender.com'




const App = () => {
  return (
    <div>
      <BrowserRouter >

      <Navbar />

      <Routes>

        <Route path=`${url}` element={<Shop/>} />
        <Route path=`${url}/mens` element={<ShopCategory category='men' banner = {men_banner} />} />
        <Route path=`${url}/womens` element={<ShopCategory category='women' banner = {women_banner}/>} />
        
        <Route path=`{url}/kids` element={<ShopCategory category='kid' banner ={kid_banner}/>}  />
        <Route path=`{url}/product` element={< Product/>} />
        <Route path=`{url}/product/:productId ` element={< Product/>} />
        <Route path=`{url}/cart` element={< Cart/>} />
        <Route path=`{url}/login` element={< LoginSignUp/>} />
        <Route path=`{url}/payment` element={<Payment />} />



      </Routes>

      <Footer />

      </BrowserRouter>
      
      
    </div>
  )
}

export default App
