import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png';

const ListProduct = () => {
    const [allProducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
        try {
            const response = await fetch('https://ecommerce-72h2.onrender.com/allproducts');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setAllProducts(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    const revmove_product = async (id) =>{
        await fetch('https://ecommerce-72h2.onrender.com/removeproduct',{method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id:id})
        })
        await fetchInfo();

    }

    return (
        <div className='list-product'>
            <h1>All Product List</h1>
            <div className='listproduct-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproduct">
                <hr />
                {allProducts.map((product, index) => (
                    <div key={index} className="listproduct-format-main listproduct-format">
                        <img src={product.image} alt="" className="listproduct-product-icon" />
                        <p>{product.name}</p>
                        <p>${product.old_price}</p>
                        <p>${product.new_price}</p>
                        <p>{product.category}</p>
                        <img className="listproduct-remove-icon" onClick={()=>{revmove_product(product.id)}} src={cross_icon} alt='' />
                    </div>
                
                
                ))}
            </div>
        </div>
    );
};

export default ListProduct;






























// import React, { useEffect, useState } from 'react'
// import './ListProduct.css'
// import cross_icon from '../../assets/cross_icon.png' 

// const ListProduct = () => {

//     const [allproducts,setAllProducts]=useState([]);
//     const fetchinfo = async ()=>{
//         await fetch('http://localhost:4000/allproducts')
//         .then((res)=>res.json())
//         .then((data)=> { setAllProducts(data)})
//     }

//     useEffect(()=>{
//         fetchinfo();


//     },[])

//   return (


//     <div className='list-product'>
//         <h1>All Product List</h1>
//         <div className='listproduct-format-main'>
//             <p>Products</p>
//             <p>Title</p>
//             <p>Old Price</p>
//             <p>New Price</p>
//             <p>Category</p>
//             <p>Remove</p>

//         </div>
//         <div className="listproduct-allproduct">
//             <hr/>
//             {allproducts.map(product,index) => {

//                 return

//                     (<div key={index} className="listproduct-format-main listproduct-format">

//                         <img src={product.image} alt="" className="listproduct-product-icon" />
//                         <p>{product.name}</p>
//                         <p>${product.old_price}</p>
//                         <p>${product.new_price}</p>
//                         <p>{product.category}</p>
//                         <img className="listproduct-rempve-icon" src={cross_icon} alt=''>

//                         </img>
                    
             
//              </div>)

//             }
//         }

        

//         </div>
      
//     </div>
//   )
// }

// export default ListProduct
