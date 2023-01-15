import React from 'react';
import './components/VideoPlayer.css';
import vid1 from './vid1.mp4';



function VideoPlayer() {
  return (
    <>
        <div className='first'>
        <div className='container'>
            
        <div className='vid'>
      <video 
        controls
        src={vid1} 
      />
      <h5>Messi's Argentina Puts Mexico In  Thier Place</h5>
      </div>

    <div className='inside'>
      <div className='pic'>
        <a href=''>
      <img src='./images/portugal.jpg' alt=''/>
      <h6>Portugal bows out of the worldcup</h6>
      </a> </div>

      <div className='pic'>
        <a href=''>
      <img src='./images/germany1.jpg' alt=''/>
      <h6>Toothless Germany bites in vein</h6>
      </a>
      </div>
      <div className='pic'>
        <a href=''>
      <img src='./images/ronaldo1.jpg' alt=''/>
      <h6>The G.O.A.T also cries</h6>
      </a>
      </div>

      <div className='pic'>
        <a href=''>
      <img src='./images/tchou.jpg' alt=''/>
      <h6>Tchuoameni the real deal?</h6>
      </a>
      </div>

      </div>
      </div>
      </div>


     
      




    </>
  )
}

export default VideoPlayer