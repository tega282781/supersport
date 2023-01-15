import React, { Component } from 'react'

 class Match extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         soccerVideos:[],
      };
    }

    componentDidMount(){
        fetch(`https://www.scorebat.com/videos-api/v1/`).then
        ((response) => response.json()).then((data) => this.setState(
            {soccerVideos:data}
        ));
    }
  render() {
    return (
      <>
        <div className='card-container'>
            {
                this.state.soccerVideos.map((soccerVideos)=>
                <div className='card-container'>
                    <a href={soccerVideos.url} target='_blank' rel='noreferrer'>
                        <img src={soccerVideos.thumbnail} 
                        alt='pic' 
                        height= "150" 
                        width= "150" />
                        </a><br />
                        <p>{soccerVideos.title}</p>

                </div>)
            }
        </div>
      
      <h1>HELLO</h1>
      </>
    )
  }
}



export default Match