import React, {useState} from 'react';
import "./Content.css";
import Leagues from './Leagues';
import Standings from './Standings';

const Content = () => {
    const [active, setActive] = useState(true);
  return (
    <div className='content-container'>
        <div className='tabs'>

            <div className='tabs-leagues' onClick={()=>setActive(true)}>
                <h2 style={{color: active ? 'red' : null}}>Leagues</h2>
            </div>

            <div className='tabs-standings'  onClick={()=>setActive(false)}>
                <h2 style={{color: !active ? 'red' : null}}>Standings</h2>
            </div>
        </div>
        {active ? <Leagues /> : <Standings />}

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




        import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import "./Griding2.css";


export default function SidebarItems(item){
    const [open, setOpen,] = useState(false)
   
    if(item.children){
        return(
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <span>
                    <FaChevronDown onClick={() => setOpen(!open)}></FaChevronDown>
                    {item.title}
                    </span>
                </div>
    
                <div className='sidebar-content'>
               hello
                </div>
            </div>
    
            
           
        )
        }
        else{
            return(
                <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <span>
                    <FaChevronDown onClick={() => setOpen(!open)}></FaChevronDown>
                    {item.title}
                    </span>
                </div>
                </div>
            )
                
            
        
    }
}
    </div>
  )
}



import { useState } from "react";


export default function SidebarItem({item}){
    const [open, setOpen] = useState(false)

    
    if(item.childrens){
        return (

           <div className="doo">
            <div className="container">
            <div className={open ? "footer4-item open" : "footer4-item"}>
                <div className="footer4-title">
                    <span>
                        {item.title}    
                    </span> 
                    <i className="bi-chevron-down " onClick={() => setOpen(!open)}></i>
                </div>
                <div className="footer4-content">
                    { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
                </div>
            </div>
            </div>
            </div>
           
        
        )
    }else{
        return (
            <div className="doo">
            <a href={item.path || "#"} className="footer4-item plain">
                
                {item.title}
            </a>
            </div>
        )
    }
}






[
  {
      "title": "NETWORK",
      "icon": "FaChevronDown",
      
      "childrens": [
          {
              "title": "SuperSport.com"
          },
          {
              "title": "DSTV" 
          },
          {
              "title": "Showmax"
          },

          
          {
              "title": "Box Office"
          },
          {
              "title": "M-Net"
          }  
      ]
  },
  {
      
          "title": "SPORTS",
          "icon": "bi-phone-fill",
          "childrens": [
              {
                  "title": "Football"
              },
              {
                  "title": "Rugby"
              },
              {
                  "title": "Cricket"
              },
              {
                  "title": "Golf"
              },
              {
                  "title": "MotorSport"
              },
              {
                  "title": "Tennis"
              },
              {
                  "title": "Athletics"
              },
              {
                  "title": "Cycling"
              },
              {
                  "title": "Boxing"
              },
              {
                  "title": "Aquatics"
              }
          ]
      }, 
  
  {
          "title": "ACCESS",
          "icon": "bi-phone-fill",
          "childrens": [
              {
                  "title": "TV Guide"
              },
              {
                  "title": "Watch Live"
              },
              {
                  "title": "Podcast"
              }
          ]
      },

  {
      "title": "Win",
          "icon": "bi-phone-fill",
          "childrens": [
              {
                  "title": "Competition"
              },
              {
                  "title": "Games"
              }
          ]
  },
  {
      "title": "Mobile Apps",
      "icon": "bi-phone-fill",
      "childrens": [
          {
              "title": "IOS App"
          },
          {
              "title": "Android App"
          }
      ]
  },

  {
      "title": "OTHER",
      "icon": "bi-phone-fill",
      "childrens": [
          {
              "title": "Terms and Conditions"
          },
          {
              "title": "License Agreements"
          },
          {
              "title": "Privacy notice"
          },
          {
              "title": "About Us"
          },
          {
              "title": "SuperSport Schools"
          }
      ]
  }
]



export default Content