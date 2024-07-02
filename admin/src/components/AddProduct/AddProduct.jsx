import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'


const AddProduct = () => {

    const [image,setImage]=useState(false);
    const [productDetails,setProductDetails]=useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:"",

    })

    const imageHandler = (e)=>{
        setImage(e.target.files[0]);
    }

    const changeHandler = (e) =>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const Add_Product = async ()=>{
        console.log(productDetails)
        let responceData;
        let product = productDetails;
        let formData = new FormData();

        formData.append('image',image);
        await fetch('https://ecommerce-72h2.onrender.com/upload',{method:"POST",
            headers:{
                Accept:'application/json'
            },
            body:formData,
        }).then((resp)=>resp.json()).then((data)=>{responceData=data})

        if(responceData.success){
            product.image = responceData.image_url;
            console.log(product)
            await fetch('https://ecommerce-72h2.onrender.com/addproduct',{
                method:'POST',
                headers:{
                    Accept:"application/json",
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert('product Added'):alert('failed to Added')
            })
        }
    }



  return (
    <div className='add-product'>
        <div className="addproduct-itemfield">
            <p>Product title</p>
            <input type='text' value={productDetails.name} onChange={changeHandler} name="name" placeholder='type here'></input>
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>price</p>
                <input type='text' name='old_price' onChange={changeHandler} placeholder='type here'/>
            </div>
            <div className="addproduct-itemfield">
                <p>Offer Price</p>
                <input type='text' onChange={changeHandler} name = 'new_price' placeholder='type here'/>
            </div>
        </div>
        <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select name='category'value={productDetails.category} onChange={changeHandler} className='add-product-selector'>
                <option value='women'>Women </option>
                <option value='men'>Men </option>
                <option value='kid'>Kid </option>


                </select>
            
        </div>
        <div className="addproduct-itemfiled">
            <label htmlFor='file-input'>
                <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumbnail-img' alt='' />

            </label>
            <input onChange={imageHandler}  type='file' name='image' id='file-input' hidden/>
        </div>
        <button onClick={()=>{Add_Product()}} className='addproduct-btn'>ADD</button>
      
    </div>
  )
}

export default AddProduct
