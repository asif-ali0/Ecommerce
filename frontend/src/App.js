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




const App = () => {
  return (
    <div>
      <BrowserRouter >

      <Navbar />

      <Routes>

        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory category='men' banner = {men_banner} />} />
        <Route path='/womens' element={<ShopCategory category='women' banner = {women_banner}/>} />
        
        <Route path='/kids' element={<ShopCategory category='kid' banner ={kid_banner}/>}  />
        <Route path='/product' element={< Product/>} />
        <Route path='/product/:productId' element={< Product/>} />
        <Route path='/cart' element={< Cart/>} />
        <Route path='/login' element={< LoginSignUp/>} />
        <Route path='/payment' element={<Payment />} />



      </Routes>

      <Footer />

      </BrowserRouter>
      
      
    </div>
  )
}

export default App
