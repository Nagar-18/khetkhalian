import React from 'react'
import Navbar from '../Components/Navbar'

export default function Mycart() {
  return (
    <div>
        <Navbar/>
      <div className="conatiner bg-dark" style={{height:'100vh',color:'aliceblue'}}>
        <div className='d-flex justify-content-center'><h2>Add items To See in Cart</h2></div>
      </div>
    </div>
  )
}
