import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate=useNavigate();

  const handleonSubmit=async(e)=>{
    e.preventDefault();
    const response= await fetch(`http://localhost:5000/api/createuser`,{
      method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify({
      name:state.name,
      email:state.email,
      password:state.password
    })
  
  })
  const output=await response.json();
  
  if(output.success)
  {
    navigate("/Login");
    
  }
  else
  alert("Invalid Email/password");
  
  
  }
  
    const [state,setstate]=useState({name:"",email:"",password:""});
  
  
    const handleonchange=(event)=>{
      setstate({...state,[event.target.name]:event.target.value})
    }

  return (
    <div>
       <div className="container bg-dark"style={{height:"100vh",maxWidth:"100vw"}}  >
    <div className="d-flex justify-content-center align-items-center "style={{height:"100vh"}} >

       
        
    <form onSubmit={handleonSubmit} style={{backgroundColor:"#c3fafb",color:"black",borderRadius:"8px"}} className=' fs-4'>
        <div className="form-group d-flex justify-content-center mt-2 fs-3" style={{fontFamily:" 'Fira Sans', sans-serif"}}>Connecting-People</div>
        <div class="form-group m-2">
    <label for="exampleInputname1">Name</label>
    <input type="text" class="form-control my-2" id="examplename1" placeholder="Enter Your Full Name" name='name' onChange={handleonchange} value={state.name}/>
  </div>
  <div class="form-group m-2">
    <label for="exampleInputEmail1 my-1 ">Email address</label>
    <input type="email" class="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' placeholder="Enter a valid email"onChange={handleonchange} value={state.email}/>
    <small id="emailHelp" class="form-text text-muted my-1">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group m-2">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control my-2" id="exampleInputPassword1" placeholder="Password" name='password' onChange={handleonchange} value={state.password}/>
  </div>
  <div class="form-group m-2">
    <label for="exampleInputPassword1">Geo-Location</label>
    <input type="text" class="form-control my-2" id="exampleInputPassword1" placeholder="Enter Your address" />
  </div>

 

  <div className='d-flex justify-content-center'><button type="submit" class="btn btn-primary mt-3  px-5" >Create A New Account</button></div>
  <hr />
  <div className='d-flex justify-content-center my-2 py-2'>Already  have an account? <a href="/" >Login</a></div>

</form>
    
   </div>
   </div>
    </div>
  )
}
