// import React from 'react'
// import './Breadcrums.css'
// import arrow_icon from '../Assets/breadcrum_arrow.png'

// const Breadcrums = (props) => {
//   const {product} = props;

//   return (

//     <div className='breadcrum'>

//       <h1>How can i help u sir</h1>

//       Home<img src = {arrow_icon} alt='' />SHOP <img src = {arrow_icon} alt='' /> {product.category}<img src={arrow_icon} alt='' />{product.name}
      
//     </div>
//   )
// }

// export default Breadcrums;

import React from 'react';
import './Breadcrums.css'; // assuming you have defined CSS styles for breadcrumbs
import arrowIcon from '../Assets/breadcrum_arrow.png'; // assuming the path to your arrow icon is correct

const Breadcrums = ({ product }) => {
  if (!product) {
    return null; // or any placeholder or loading state you want to render
  }

  return (
    <div className='breadcrum'>
      {/* <h1>How can I help you, sir?</h1>  */}

      <span>Home</span>
      <img src={arrowIcon} alt='' />
      <span>SHOP</span>
      <img src={arrowIcon} alt='' />
      <span>{product.category}</span>
      <img src={arrowIcon} alt='' />
      <span>{product.name}</span>
    </div>
  );
};

export default Breadcrums;
