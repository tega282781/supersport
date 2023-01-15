import React, { useState } from 'react';
import "./Fixtures.css";



function Fixtures() {
  const [SportState, setSportState] = useState("");
  return (
    <>
    <div className='fixture'>
    <div className='letter'>
      <div className='container'>
    <h4>Today</h4>
    </div>
    </div>

    <div className='fixtures'>
    <div className='container'>
    
    <div className='left'>
    <button>Fixtures</button>
    <button>Results</button>
    </div>

    <div className='right'>

    <div className='right1'>
    <div className='container'>

      <select 
        className='custom-select'
        onChange={(e) => {
          const selectedSport = e.target.value;
          setSportState(selectedSport);
        }}>
          <option value="Football">Football</option>
          <option value="Rugby">Rugby</option>
          <option value="Cricket">Cricket</option>
          <option value="Motorsport">Motorsport</option>
          <option value="Tennis">Tennis</option>

        </select>
        {SportState}
        </div>
    </div>

    <div className='right2'>
    <div className='container'>

      <select 
        className='custom-select'
        onChange={(e) => {
          const selectedSport = e.target.value;
          setSportState(selectedSport);
        }}>
          <option value="">Tournament</option>
          <option value="No Update Available">Africa Cup Of Nations</option>
          <option value="No Update Available">Africa Cup of Nations Qualifying</option>
          <option value="No Update Available">Bafanna Bafanna</option>
          <option value="No Update Available">CAF Chamipions League</option>
          <option value="No Update Available">CAF Confederations Cup</option>
          <option value="No Update Available">CAF Women Chamipions League</option>

        </select>
        {SportState}

    </div>
    </div>

    </div>
 
   

    </div>
    </div>
    </div>
    
    
    </>
  )
}

export default Fixtures