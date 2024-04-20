import React from 'react'
import back from './img/back.jpg'
export default function Card() {
  return (
    <div>
      
      <div class="card" style={{backgroundColor:"#8e9596"}}>
  <img class="card-img-top" src={back} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Wheat-Field</h5>
    <p class="card-text">Wheat is grown in a variety of soils of India. Soils with a clay loam or loam texture, good structure and moderate water holding capacity are ideal for wheat cultivation. Care should be taken to avoid very porous and excessively drained oils. Soil should be neutral in its reaction.</p>
    <a href="#" class="btn btn-primary">Read more </a>
  </div>
</div>
      </div>
   
  )
}
