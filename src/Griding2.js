import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./components/Griding2.css";
import vid1 from './vids.mp4';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaFutbol } from 'react-icons/fa';
import { FaTableTennis } from 'react-icons/fa';
import { FaFootballBall } from 'react-icons/fa';
import { FaCrutch } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaRegCopyright } from 'react-icons/fa';
import SidebarItems from './components/SidebarItems';
import items from "./data/Sidebar.json"




const Griding2 = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <>
        <div data-aos="fade-up" className="griding2">
        <div className="container">

        <div data-aos="flip-right" className="photo">
        <div className="photo1">
        <img src='./images/messi.jpg' alt=''/>
        <h6>Messi finally winning the worldcup?</h6>
        </div>

        <div className="photo1">
        <img src='./images/croatia.jpg' alt=''/>
        <h6>Croatia with the best fanbase</h6>
        </div>

        <div className="photo1">
        <img src='./images/neymar.jpg' alt=''/>
        <h6>Neymar worldcup dream comes to an end</h6>
        </div>
        
        </div>


        <div data-aos="flip-left" className='vids'>
      <video 
        controls
        src={vid1} 
      />
      <h5>Ronaldo couldn't hide his feeling after being eliminated by Morocco</h5>
      </div>
        </div>
        </div>
        
        <div className="button1">
          <div className="container">
        <button>More News</button>
        </div>
        </div>


        <div className="container">
          <div className="latest1">
          <p>Read the latest News</p>
          <div className="latest">
            <div className="latest2"><img src="./images/win.jpg" alt="" /></div>
             <div>
              <h5>ARGENTINA TRIUMPHS</h5>
             <p>
              After losing their opening game to Saudi Arabia, 
              we thought all hope was lost, but the Great footballing 
              country of Argentina never gave up and their resilience paid off
              as they were crowned world chaimpions
             </p>
             </div>
           
          </div>
        </div>
        </div>

        <div className="news">
          <div className="container">

          
            <div className="news1">
              <img src="./images/martinez1.jpg" alt="" />
              <p>Emiliano Martinez has his name written in history already?</p>
            </div>

            <div className="news1">
              <img src="./images/onana.jpg" alt="" />
              <p>Onana retires from international duty</p>
            </div>

            <div className="news1">
              <img src="./images/ochoa.jpg" alt="" />
              <p>Ochoa signs for a new club</p>
            </div>

            <div className="news1">
              <img src="./images/martinez1.jpg" alt="" />
              <p>A disppointing end of 2022 for Ronaldo</p>
            </div>

          </div>
        </div>

        <div className="long">
        <div className="container">

        
          <div data-aos="fade-up" className="football1">
           <div><a href="#"><FaFutbol /><p>FOOTBALL</p></a></div>
          </div>
         
         
          
         
          <div data-aos="fade-up" className="tennis1">
          <div><a href="#"><FaTableTennis /><p>TENNIS</p></a></div>
          </div>
          
         

         
          <div data-aos="fade-up" className="rugby1">
            <div><a href="#"><FaFootballBall /><p>RUGBY</p></a></div>
          </div>
          
          

        
          <div data-aos="fade-up" className="cricket1">
          <div><a href="#"><FaCrutch /><p>CRICKET</p></a></div>
          </div>
          
        </div>
        </div>
        

       

        <div className="footer2">
          <div className="container">

         
          </div>
        </div>

        <div className="bottom">
          <div className="container">
            <div className="iconic">

            <div className="facebook">
              <a style={ {color: "blue", }} href="#"><FaFacebook /></a>
            </div>

            <div className="instagram">
            <a style={ {color: "red", }} href="#"><FaInstagram /></a>
            </div>

            <div className="youtube">
            <a style={ {color: "red", }} href="#"><FaYoutube /></a>
            </div>

            <div className="twitter">
            <a href="#"><FaTwitter /></a>
            </div>
            

            </div>
            <hr />
          </div>
        </div>


        <div className="footer">
        <div className="container">
        <div className="foot">
          <ul>
            <li><a href="#"><h5>Network</h5></a></li>
            <li><a href="#">SuperSport.com</a></li>
            <li><a href="#">DSTv</a></li>
            <li><a href="#">Showmax</a></li>
            <li><a href="#">Box Office</a></li>
            <li><a href="#">M-Net</a></li>
          </ul>
        </div>

        <div className="foot">
          
          <ul>
          <li><a href="#"><h5>Sports</h5></a></li>
            <li><a href="#">Football</a></li>
            <li><a href="#">Rugby</a></li>
            <li><a href="#">Cricket</a></li>
            <li><a href="#">Golf</a></li>
            <li><a href="#">MotorSport</a></li>
            <li><a href="#">Tennis</a></li>
            <li><a href="#">Athletics</a></li>
            <li><a href="#">Cycling</a></li>
            <li><a href="#">Boxing</a></li>
            <li><a href="#">Aquatics</a></li>
         
          </ul>
        </div>

        <div className="foot">

          <ul>
          <li><a href="#"><h5>Access</h5></a></li>
            <li><a href="#">Tv Guide</a></li>
            <li><a href="#">Watch Live</a></li>
            <li><a href="#">Podcast</a></li>
           
          </ul>
        </div>

        <div className="foot">

          <ul>
          <li><a href="#"><h5>Win</h5></a></li>
            <li><a href="#">Competition</a></li>
            <li><a href="#">Games</a></li>
           
          </ul>
        </div>

        <div className="foot">

          <ul>
          <li><a href="#"><h5>Mobile Apps</h5></a></li>
            <li><a href="#">IOS App</a></li>
            <li><a href="#">Android App</a></li>
           
          </ul>
        </div>

        <div className="foot">

          <ul>
          <li><a href="#"><h5>Other</h5></a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">License Agreement</a></li>
            <li><a href="#">Privacy Notice</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">SuperSport Schools</a></li>
          </ul>
        </div>
        </div>
        </div>

      <div className="footer4">
        <div className="container">
        { items.map((item, index) => <SidebarItems key={index} item={item} />) }
      </div>
      </div>



        <div className="bottom1">
          <div className="container">
          <div className="foot2">

            <div className="real-pic">
          <img src="./images/ss.png" alt="" />
            </div>

          <div className="real">
            <div>
              <a href="#">MultiChoice Website</a>
            </div>

            <div>
              <a href="#">Terms & Conditions</a>
            </div>

            <div>
              <a href="#">Privacy & Cookie Notice</a>
            </div>

            <div>
              <a href="#">MultiChoice Website</a>
            </div>

            <div>
              <a href="#">Responsible Disclosure Privacy</a>
            </div>

            <div>
              <a href="#">Copyright</a>
            </div>

            <div>
              <a href="#">Careers</a>
            </div>
            </div>

            <div className="copy">
              <p><FaRegCopyright />2013-2022 MultiChoice (PTY) LTD. 
              All Rights Reserved</p>
            </div>
            
          </div>

         
          </div>
        </div>
        </>
    )
}

export default Griding2;