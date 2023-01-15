import React, { useEffect } from "react";
import './Griding2.css';
import Aos from "aos";
import "aos/dist/aos.css";

const Card = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
}, [])
  return (
    <>
    <div data-aos="fade-up" className='all-card'>
        <div className='container'>
          
        <div className='card'>

        <img src='./images/ronaldo.jpg' alt='' />

        <div className='intro'>
            <h3>My Job In  Europe Is Done</h3>
            <p>Cristiano Ronaldo moves to Saudi Arabia after ending 
                his second spell at manchester united.</p>
        </div>
        </div>

        <div className='card'>

        <img src='./images/worldcup7.jpg' alt='' />

        <div className='intro'>
            <h3>Seeing These Three At The Worldcup again?</h3>
            <p> 2022 Worldcup might be  the last time we see these three,
              after a disappointing show at Qatar
                   </p>
        </div>
        </div>

        <div className='card'>

<img src='./images/morocco.jpg' alt='' />

<div className='intro'>
    <h3>Morocco Makes History</h3>
    <p>Morocco became the first African country to 
      reach the semi finals of the FIFA worldcup
           </p>
</div>
</div>

<div className='hid'>
<div className='card'>

<img src='./images/onana.jpg' alt='' />

<div className='intro'>
    <h3>Onana Retires From National Team  Duty.</h3>
    <p> Andre Onana has called it quit on his International 
      duties after being dropped from the squad
           </p>
</div>
</div>
</div>


        </div>
        </div>
       
    </>
  )
}

export default Card