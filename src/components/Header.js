import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap/js/dist/dropdown';
import './myStyles.css';
import { FaSearch } from "react-icons/fa";
import {FaUserCheck} from "react-icons/fa";
import {FaAngleRight} from "react-icons/fa";
import {data} from './Slider'


function Navy() {
  const slideLeft =() =>{
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight =() =>{
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  return (
    <>
     <div className='container-fluid'>

     <FaAngleRight onClick={slideLeft} />
      <div id="slider">
      {data.map((item)=>(
        <img className='imagine' src={item.img} alt='/' />
      ))}
  </div>
  <a href='#'><FaAngleRight onClick={slideRight} /></a>

     </div>
      
  
  
  


  </>
 


   
  )
}

export default Navy