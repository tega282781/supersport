import React, {useState, useEffect} from 'react';
import "./Content.css"
import axios from 'axios';


const Leagues = () => {
    const [data, setData] = useState([]);


    
  return (
    <div className='leagues-container'>
        {data.map((data)=>(
            <div key={data.id} className="league-div">
                <img src= {data.logos.light} alt="#" />
                <h1>{data.name}</h1>
            </div>
        ))}
        </div>
  )
}

export default Leagues