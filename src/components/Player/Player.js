import React from 'react';
import './player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
const Player = (props) => {
    const {name, img, salary, country,format} = props.player;
    const imgStyle = {height:'200px'}
    // const playerStyle = {border: '1px solid red', margin:'10px', padding:'10px'}
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div  className="player">
  
     <div>
     <img style={imgStyle} src={img} alt=""/>
         </div> 
            <div className ="player-info" >
            <h1 id="player-name" > {name}</h1>
            <h4>{format}</h4>
            <p>Salary:$ {salary}</p>
            <p><small className="country-name" >Country: {country}</small></p>
            <button type="button" class="btn btn-danger" onClick={() => handleAddPlayer(props.player)}> <FontAwesomeIcon icon={faUserPlus}/> Select Player </button>

            </div>
            <div>
                <h4 id="detail-background" > <a id="detail-link" href="https://www.espncricinfo.com/bangladesh/content/player/country.html?country=25">Click To View Details</a></h4>
            </div>
            
           
        </div>
       
       
    );
};

export default Player;