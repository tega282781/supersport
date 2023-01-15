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




function Navy() {
  return (
    <>
      
      <nav class="navbar navbar-expand-lg navbar-dark ">
    
  <div class="container">
  <a class="navbar-brand" href="#"><p>SuperSports</p></a>

<div className='hello'>
  <a href='#'><span><FaSearch /></span></a>
        <a href='#'><span><FaUserCheck /></span></a>
  </div>

<button class="navbar-toggler" 
type="button" data-bs-toggle="offcanvas" 
data-bs-target="#offcanvasExample" 
aria-controls="navbarSupportedContent" 
aria-expanded="false" 
aria-label="Toggle navigation">

  <span class="navbar-toggler-icon"></span>
  
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
   
 

   <div className='second'>
      <ul className='list'>

         <li className='football'>
            <a href='#'>Football</a>
          
            <div className='inner'>

               <div className='1'>
              
             <div className='details'>

               <div className='one'>
               <div> <a href='#'>FIXTURES</a></div>
                <div>  <a href='#'>RESULTS</a></div>
                <div>  <a href='#'>VIDEOS</a></div>
                <div>  <a href='#'>NEWS</a></div>
               </div>

               <div className='two'>
               <div className='fifa'><a href='#'>FIFA WORLD CUP</a></div>
               <div> <a href='#'>World Cup 2022</a></div>
                <div>  <a href='#'>FIFA U17 Women's World Cup</a></div>
                <div>  <a href='#'>Women's U20 World Cup</a></div> 
               </div>

               <div className='three'>
               <div className='south'><a href='#'>SOUTH AFRICA</a></div>
               <div> <a href='#'>Carling Black Label Cup</a></div>
                <div>  <a href='#'>Dstv Premiership</a></div>
                <div>  <a href='#'>MTN8 Wafa Wafa Cup</a></div> 
                <div> <a href='#'>Motsepe Foundation Championship</a></div>
                <div>  <a href='#'>Dstv Diski Challenge</a></div>
                <div>  <a href='#'>Bafana Bafana</a></div>
                <div>  <a href='#'>Nedbank Cup</a></div>
               </div>

               <div className='five'>
               <div className='africa'><a href='#'>REST OF AFRICA</a></div>
               <div> <a href='#'>Ethiopia Premier League</a></div>
                <div>  <a href='#'>MTN Super League</a></div>
                <div>  <a href='#'>CAF Women Champs League</a></div> 
                <div> <a href='#'>CAF Champions League</a></div>
                <div>  <a href='#'>CAF Confederation Cup</a></div>
                <div>  <a href='#'>Cosafa Cup</a></div>
                <div>  <a href='#'>Africa Cup Of Nations</a></div>
               </div>
               
               <div className='six'>
               <div className='europe'><a href='#'>EUROPE</a></div>
               <div> <a href='#'>Premier League</a></div>
                <div>  <a href='#'>Uefa Champions League</a></div>
                <div>  <a href='#'>Uefa Europa League</a></div> 
                <div> <a href='#'>Uefa Europa Conference League</a></div>
                <div>  <a href='#'>CAF Confederation Cup</a></div>
                <div>  <a href='#'>Spanish LaLiga</a></div>
                <div>  <a href='#'>Italian Serie A</a></div>
                <div>  <a href='#'>League Cup</a></div>
               </div>

               
               <div className='seven'>
               <div className='world'><a href='#'>Internationals</a></div>
               <div> <a href='#'>World Cup 2022</a></div>
                <div>  <a href='#'>Fifa Internationals</a></div>
                <div>  <a href='#'>Uefa Nations League</a></div> 
               </div>

             </div>
            </div>
            </div>
         </li>


         <li className='rugby'>
            <a href='#'>Rugby</a>
            <div className='inner'>

<div className='1'>

<div className='details'>

<div className='one'>
<div> <a href='#'>FIXTURES</a></div>
 <div>  <a href='#'>RESULTS</a></div>
 <div>  <a href='#'>VIDEOS</a></div>
 <div>  <a href='#'>NEWS</a></div>
</div>

<div className='two'>
<div className='fifa'><a href='#'>SOUTH AFRICA</a></div>
<div> <a href='#'>Springboks</a></div>
 <div>  <a href='#'>Currie Cup</a></div>
 <div>  <a href='#'>Craven Week</a></div> 
 <div>  <a href='#'>Varsity Cup</a></div>
 <div>  <a href='#'>Toyota Challenge</a></div> 
</div>

<div className='three'>
<div className='south'><a href='#'>REGIONAL</a></div>
<div> <a href='#'>United Rugby Chapionship</a></div>
 <div>  <a href='#'>Championship Cup</a></div>
 <div>  <a href='#'>Bunnies NPC</a></div> 
</div>

<div className='five'>
<div className='africa'><a href='#'>INTERNATIONAL</a></div>
<div> <a href='#'>International Rugby</a></div>
 <div>  <a href='#'>Women's Rugby World Cup</a></div>
 <div>  <a href='#'>Rugby Championship</a></div> 
 <div> <a href='#'>Seven's Men</a></div>
 <div>  <a href='#'>Seven's Women</a></div>
 <div>  <a href='#'>U20 Summer Series</a></div>
 <div>  <a href='#'>British  And Irish Lions 2021</a></div>
</div>

<div className='six'>
<div className='europe'><a href='#'>EUROPE</a></div>
<div> <a href='#'>Top 14</a></div>
 <div>  <a href='#'>Gallagher Premiership</a></div>
</div>


</div>
</div>
</div>
</li>


         <li className='cricket'>
            <a href='#'>Cricket</a>
            <div className='inner'>

<div className='1'>

<div className='details'>

<div className='one'>
<div> <a href='#'>FIXTURES</a></div>
 <div>  <a href='#'>RESULTS</a></div>
 <div>  <a href='#'>VIDEOS</a></div>
 <div>  <a href='#'>NEWS</a></div>
</div>

<div className='two'>
<div className='fifa'><a href='#'>CURRENT TOURS</a></div>
<div> <a href='#'>ICC World T20 2022</a></div>
 <div>  <a href='#'>Aus vs Eng 2022/23</a></div>
 <div>  <a href='#'>NZ vs Ind 2022/23</a></div> 
 <div>  <a href='#'>Aus vs WI 2022/23</a></div>
 <div>  <a href='#'>CSA 4-Day Series 2022/23</a></div>
</div>

<div className='three'>
<div className='south'><a href='#'>FUTURE TOURS</a></div>
<div> <a href='#'>Ban vs Ind 2022/23</a></div>
 <div>  <a href='#'>Aus vs SA 2022/23</a></div>
 <div>  <a href='#'>SA20 2022/23</a></div> 
</div>

<div className='five'>
<div className='africa'><a href='#'>PAST TOURS</a></div>
<div> <a href='#'>Ind vs SA 2022/23</a></div>
 <div>  <a href='#'>NZ Tri-series 2022/23</a></div>
 <div>  <a href='#'>Pak vs Eng 2022/23</a></div> 
 <div> <a href='#'>Eng vs SA 2022/23</a></div>
 <div>  <a href='#'>EngW vs IndW 2022/23</a></div>
 <div>  <a href='#'>Ind vs Aus 2022/23</a></div>
 <div>  <a href='#'>Aus vs NZ 2022/23</a></div>
</div>

<div className='six'>
<div className='europe'><a href='#'>COUNTRIES</a></div>
<div> <a href='#'>SA20 2022/23</a></div>
 <div>  <a href='#'>IPL 2022</a></div>
 <div>  <a href='#'>ICC Women's World Cup 2022</a></div> 
 <div> <a href='#'>ICC U19 World Cup</a></div>
 <div>  <a href='#'>ICC World UT20 2022</a></div>
 <div>  <a href='#'>ICC Cricket World Cup Super League</a></div>
 <div>  <a href='#'>ICC World Test Championship Final</a></div>
</div>


<div className='seven'>
<div className='world'><a href='#'>SA Domestic</a></div>
<div> <a href='#'>CSA 4-Day Series</a></div>
 <div>  <a href='#'>CSA 1 Day Cup 2022</a></div>
 <div>  <a href='#'>CSA T-20 Challenge 2022/23</a></div> 
</div>

</div>
</div>
</div>
</li>



         <li className='golf'>
            <a href='#'>Golf</a>
            <div className='inner'>

<div className='1'>

<div className='details'>

<div className='one'>
<div> <a href='#'>FIXTURES</a></div>
 <div>  <a href='#'>RESULTS</a></div>
 <div>  <a href='#'>VIDEOS</a></div>
 <div>  <a href='#'>NEWS</a></div>
</div>

<div className='two'>
<div className='fifa'><a href='#'>TOURS</a></div>
<div> <a href='#'>US PGA Tour</a></div>
 <div>  <a href='#'>DP World Tour</a></div>
 <div>  <a href='#'>Sunshine Tour</a></div> 
</div>

<div className='three'>
<div className='south'><a href='#'>MAJORS</a></div>
<div> <a href='#'>The Masters </a></div>
 <div>  <a href='#'>PGA Championship</a></div>
 <div>  <a href='#'>US Open</a></div> 
 <div> <a href='#'>Open  Championship</a></div>
</div>

<div className='five'>
<div className='africa'><a href='#'>OTHERS</a></div>
<div> <a href='#'>Ryder Cup</a></div>
 <div>  <a href='#'>President's Cup</a></div>
 <div>  <a href='#'>WGC</a></div> 
</div>

</div>
</div>
</div>
</li>

         <li className='motorsport'>
            <a href='#'>MotorSport</a>
            <div className='inner'>

<div className='1'>

<div className='details'>

<div className='one'>
<div> <a href='#'>FIXTURES</a></div>
 <div>  <a href='#'>RESULTS</a></div>
 <div>  <a href='#'>VIDEOS</a></div>
 <div>  <a href='#'>NEWS</a></div>
</div>

<div className='two'>
<div className='fifa'><a href='#'>CHAMPIONSHIPS</a></div>
<div> <a href='#'>MotorGP</a></div>
 <div>  <a href='#'>Formula1</a></div>
 <div>  <a href='#'>Dakar Rally</a></div>
 <div>  <a href='#'>SBK</a></div>  
</div>

</div>
</div>
</div>
</li>

         <li className='tennis'>
            <a href='#'>Tennis</a>
            <div className='inner'>

<div className='1'>

<div className='details'>

<div className='one'>
<div> <a href='#'>FIXTURES</a></div>
 <div>  <a href='#'>RESULTS</a></div>
 <div>  <a href='#'>VIDEOS</a></div>
 <div>  <a href='#'>NEWS</a></div>
</div>

<div className='two'>
<div className='fifa'><a href='#'>TOURS</a></div>
<div> <a href='#'>ATP</a></div>
 <div>  <a href='#'>WTA</a></div>
</div>

<div className='two'>
<div className='fifa'><a href='#'>GRAND SLAMS</a></div>
<div> <a href='#'>Wimbledon</a></div>
 <div>  <a href='#'>Australian Open</a></div>
 <div> <a href='#'>US Open</a></div>
 <div>  <a href='#'>Rolan Garros</a></div>
</div>
</div>
</div>
</div>
</li>
      </ul>
   </div>
   

   <div className='third'>
      <ul className='list'>

         <li className='more'>
            <a href='#'>More</a>
            <div className='inner'>

<div className='1'>

<div className='details'>


<div className='two'>
<div className='fifa'><a href='#'>SPORTS</a></div>
<div> <a href='#'>Athletics</a></div>
 <div>  <a href='#'>Cycling</a></div>
 <div>  <a href='#'>Boxing</a></div>
 <div> <a href='#'>Aquatics</a></div>
 <div>  <a href='#'>WWE</a></div>
 <div>  <a href='#'>UFC</a></div>
 <div>  <a href='#'>Netball</a></div> 
</div>

<div className='three'>
<div className='south'><a href='#'>OTHER</a></div>
<div> <a href='#'>Let's Play</a></div>
 <div>  <a href='#'>Xtra</a></div>
 <div>  <a href='#'>SuperSport Schools</a></div> 
 <div> <a href='#'>Define Your Great</a></div>
 <div>  <a href='#'>SuperPicks</a></div>
 <div>  <a href='#'>Blitz News</a></div> 
 <div> <a href='#'>Super Saturday</a></div>
</div>

<div className='five'>
<div className='africa'><a href='#'>SUPPORT</a></div>
<div> <a href='#'>Email Us</a></div>
</div>

</div>
</div>
</div>
</li>
           
         
         <li className='videos'>
            <a href='#'>Videos</a>
           
            <div className='inner'>
              <div> <a href='#'>home</a></div>
             <div>  <a href='#'>home</a></div>
              <div> <a href='#'>home</a></div>
             <div>  <a href='#'>home</a></div>
            </div>
         </li>

         <li className='podcast'>
            <a href='#'>Podcast</a>
           
            <div className='inner'>
              <div> <a href='#'>home</a></div>
             <div>  <a href='#'>home</a></div>
              <div> <a href='#'>home</a></div>
             <div>  <a href='#'>home</a></div>
            </div>
         </li>

         <li className='win'>
            <a href='#'>Win</a>
           
            <div className='inner'>
              <div> <a href='#'>home</a></div>
             <div>  <a href='#'>home</a></div>
              <div> <a href='#'>home</a></div>
             <div>  <a href='#'>home</a></div>
            </div>
         </li>
         </ul>
         </div>
    
         <div className='icon'>
       <a href='#'><span><FaSearch /></span></a>
        <a href='#'><span><FaUserCheck /></span></a>
       </div>
       
      
   
    </div>

    </div>

</nav>




<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
 
 <div className='container'>
  
 <div className='cancel'>
 <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
 </div>

  <div class="items">
    <div><button class="dropdown-item" type="button">Football</button></div>
    <div><button class="dropdown-item" type="button">Rugby</button></div>
    <div><button class="dropdown-item" type="button">Cricket</button></div>
    <div><button class="dropdown-item" type="button">Golf</button></div>
    <div><button class="dropdown-item" type="button">MotorSport</button></div>
    <div><button class="dropdown-item" type="button">Tennis</button></div>
    <div><button class="dropdown-item" type="button">More</button></div>
    <div><button class="dropdown-item" type="button">Videos</button></div>
    <div><button class="dropdown-item" type="button">Podcast</button></div>
    <div><button class="dropdown-item" type="button">Win</button></div>
  </div>
</div>
  </div>
</div>
  </>
 


   
  )
}

export default Navy