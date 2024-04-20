import React from 'react'
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { NavLink } from 'react-router-dom';

export default function Login() {

  const navigate=useNavigate();

  const handlonsubmit= async(e)=>{
   e.preventDefault();
   const response=await fetch(`http://localhost:5000/api/loginuser`,{
    method:'POST',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      email:state.email,
      password:state.password
    })
  })

  const output=await response.json();

  if(output)
  {
    navigate("/Home")
  }
  else
  {
    alert("Invalid Creadtinals")
  }


  }
  const [state,setstate]=useState({email:"",password:""});

  const handleonchange =(e)=>{
    setstate({...state,[e.target.name]:e.target.value});
  }

  return (
    <div className="container bg-dark"style={{height:"100vh",maxWidth:"100vw"}}  >
    <div className="d-flex justify-content-center align-items-center "style={{height:"100vh"}} >

       
        
    <form onSubmit={handlonsubmit} style={{backgroundColor:"aliceblue",color:"black",borderRadius:"8px"}} className=' fs-4'>
        <div className="form-group d-flex justify-content-center mt-3 fs-3" style={{fontFamily:" 'Fira Sans', sans-serif"}}>Connecting-People</div>
  <div class="form-group m-3">
    <label for="email">Email address</label>
    <input type="email" class="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  name='email' onChange={handleonchange} value={state.email}/>
    <small id="emailHelp" class="form-text text-muted my-1">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group m-3">
    <label for="password">Password</label>
    <input type="password" class="form-control my-2" id="exampleInputPassword1"  name='password' placeholder="Password" onChange={handleonchange} value={state.password}/>
  </div>
 

  <div className='d-flex justify-content-center'><button type="submit" class="btn btn-primary mt-3  px-5" >Log in</button></div>
  <hr />
  <div className='d-flex justify-content-center my-3 py-3'>Don't have an account? <NavLink to="/Signup" >SignUp</NavLink></div>

</form>
    
   </div>
   </div>
  )
}
