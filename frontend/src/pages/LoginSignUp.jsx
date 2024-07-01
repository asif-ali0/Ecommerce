import React, { useState } from 'react'
import './LoginSignUp.css'
const LoginSignUp = () => {

    const [state,setState] = useState("Sign Up");
    const [formData,setFormData] = useState({
      name:"",
      password:"",
      email:""
    })

    const changeHandler = (e)=>{

      setFormData({...formData,[e.target.name]:[e.target.value]})
    }
    console.log(formData)


    const login = async () =>{
      const responce = await fetch('http://localhost:4000/login',{

        method:'POST',
        headers:{
          Accept:'application/form-data',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
  
  
      })
  
      const responceData = responce.json()
      await responceData.save();
  
      if(responceData.success){
        localStorage.setItem('auth-tocken',responceData.token);
        
        alert('your data has been saved')
      }else{
        alert('your data has not been saved')
      }
  
      window.location.replace('/')

      window.location.replace('/')


      console.log('Login function Executed')

    }



    const signup = async (e) =>{

    const responce = await fetch('http://localhost:4000/signup',{

      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)


    })

    const responceData = responce.json()
    await responceData.save();

    if(responceData.success){
      localStorage.setItem('auth-tocken',responceData.token);

      alert('your data has been saved')
    }else{
      alert('your data has not been saved')
    }

    window.location.replace('/')

      
      
      
    }




  



  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>{state}</h1>
        <div className='loginsignup-fields'>
    
        {state==="Sign Up"?<input type='text' placeholder='Your Name' name='name' value={formData.username} onChange={changeHandler}></input>:""}
          <input type='email' placeholder='Enter Your Email' name='email' value={formData.email} onChange={changeHandler}></input>
          <input type='password' placeholder='Password' name='password' value={formData.password} onChange={changeHandler}></input>
          


        </div>
        <button onClick={state==='Login'?login:signup}>Continue</button>
        {state==='Sign Up'?<p className='loginsignup-login'>Already have an account?<span onClick={()=>{setState("Login")}}> Login here</span></p>:
        <p className='loginsignup-login'>Create an account?  <span onClick={()=>{setState("Sign Up")}}>  Click here</span></p>}

        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id='' />
          <p>By continuing ,i agree to the terms of use & privecy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignUp
