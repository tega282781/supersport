import React, { Component } from 'react';
import Navy from './Navy';
import Image from './Image.js';
import VideoPlayer from '../VideoPlayer.js'
import Griding from './Griding.js';
import Griding2 from '../Griding2.js';
import './Homepage.css';
import Card from './Card';






 class Homepage extends Component {
  render() {
  return (
    <div>
    <Navy />
    <Image />
    <VideoPlayer />
    <Card />
    <Griding />
    <Griding2 />
    
    </div>
  );
  }
}


export default Homepage;
