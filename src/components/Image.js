import React from 'react';
import './myStyles.css';
import {FaAngleRight} from "react-icons/fa";
import {FaAngleLeft} from "react-icons/fa";

export default function Image() {

  const slideLeft = () =>{
    var inside = document.getElementById('inside')
    inside.scrollLeft = inside.scrollLeft -150
  }
  const slideRight = () =>{
    var inside = document.getElementById('inside')
    inside.scrollLeft = inside.scrollLeft +150
  }
  return (
    <>
    <div className='images'>
        <div className='container'>
        <h5>Live Now</h5>

        <div className='inner-container'>
        <div className='arrow'><FaAngleLeft onClick={slideLeft} /></div>

        <div id='inside'>
        <div className='grid'>
          <h6>201</h6><img src="./images/worldcup.jpg" alt=""/>
          <div><p>FIFA 2022 WORLD CUP QATAR</p></div>
          </div>

          <div className='grid'>
            <h6>202</h6><img src="./images/worldcup1.jpg" alt=""/>
            <div><p>SPAIN VS COSTA RICO</p></div>
            </div>

            <div className='grid'>
          <h6>203</h6><img src="./images/worldcup2.jpg" alt=""/>
          <div><p>PORTUGAL VS GHANA</p></div>
          </div>

          <div className='grid'>
          <h6>204</h6><img src="./images/worldcup4.jpg" alt=""/>
          <div><p> Watch all matches</p></div>
          </div>

          <div className='grid'>
          <h6>205</h6><img src="./images/worldcup5.jpg" alt=""/>
          <div><p>One Last Dance </p></div>
          </div>
          

          <div className='grid'>
          <h6>206</h6><img src="./images/worldcup6.jpg" alt=""/>
          <div><p>Who Will Lift The World Cup?</p></div>
          </div>
          

          <div className='grid'>
          <h6>207</h6><img src="./images/worldcup7.jpg" alt=""/>
          <div><p>Will A New Country Emerge?</p></div>
          </div>

          <div className='grid'>
          <h6>208</h6><img src="./images/worldcup8.jpg" alt=""/>
          <div><p>Drop Your Worldcup Predictions</p></div>
          </div>

          <div className='grid'>
          <h6>209</h6><img src="./images/worldcup9.jpg" alt=""/>
          <div><p>FIFA 2022 WORLD CUP QATAR</p></div>
          </div>
        
    </div> 
    <div className='arrow'><FaAngleRight onClick={slideRight} /></div>   
    </div>
    </div>
    </div>
    </>
  )
}
