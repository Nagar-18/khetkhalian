import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const navigate=useNavigate();
  const [set,setstate]=useState(1);
  const handleonclick=()=>{
    // navigate("/Home");
    setstate(!set);
// if(set)
// navigate("/Mycart");




  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Connecting-People</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
 <NavLink className="nav-link active" onClick={handleonclick} aria-current="page" to={set?'/Mycart':'/Home'}>{set? "MyCart":"Home"}</NavLink>


        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More-Options
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/Farming">Farming Equipments</NavLink></li>
            <li><NavLink className="dropdown-item" to="/DairyCard">Dairy Equipments</NavLink></li>
            <li className="dropdown-divider"></li>
            <li><NavLink className="dropdown-item" to="/Login" >LogOut</NavLink></li>
          </ul>
        </li>
       
      </ul>
      <form className="d-flex " role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
