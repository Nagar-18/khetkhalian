import React from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'

export default function Home() {
  return (
    <div className='bg-dark'>
      <Navbar/>
      <div class="container ">
  <div class="row mt-3">
    <div class="col-sm">
     <Card />
    </div>
    <div class="col-sm">
    <Card/>
    </div>
    <div class="col-sm">
    <Card/>
    </div>
  </div>
  <div class="row mt-3">
    <div class="col-sm">
     <Card/>
    </div>
    <div class="col-sm">
    <Card/>
    </div>
    <div class="col-sm">
    <Card/>
    </div>
  </div>
  <div class="row mt-3">
    <div class="col-sm">
     <Card/>
    </div>
    <div class="col-sm">
    <Card/>
    </div>
    <div class="col-sm">
    <Card/>
    </div>
  </div>
</div>
    </div>
  )
}
