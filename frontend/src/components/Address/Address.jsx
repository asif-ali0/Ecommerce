import React from 'react'
import './Address.css'

const Address = () => {

  return (
    <div className='address-container'>
        <form>
            <h1 className='address-heading'>Address Fill</h1>
            
        <label>State</label>
        <input placeholder='Enter Your State Name' name='statename'></input>
        <label>City</label>
        <input placeholder='Enter your city name'></input>
        <label>Pincode</label>
        <input placeholder='Enter your pincode' maxLength={6} type='number' min={0} name='pincode' onChange={pincode}></input>
        <label>Land Mark</label>
        <input placeholder='Enter your Land Mark'></input>
        <label>
            Flat Number
        </label>

        <input placeholder='Enter your flat number'></input>
        <label>Full Address</label>
        
        <input placeholder='write your full address'></input>
        <label>
            Phone-Number
        </label>
        <input placeholder='Enter your phone number' type='number' maxLength={10} min='0' name='phonenumber' onChange={phonenumber}></input>
        <div className='saveaddress'>
            <button>save</button>
        </div>
        

        

        </form>
      
    </div>
  )
}

// const phonenumber = document.getElementsByName('phonenumber');
// const pincode = document.getElementsByName('pincode')

const phonenumber = (e)=>{

    const value = e.target.value;
    if(value.length > 10){
        alert('phone number must be 10 digit')
        e.target.value = value.slice(0,10)
    }


}

const pincode = (e)=>{
    const value = e.target.value;
    if(value.length > 6){
        alert('pincode must be 6 digit')
        e.target.value = value.slice(0,6)
    }
}


export default Address
