import React, { useState, useEffect } from 'react';
import './App.css';
import Player from './components/Player/Player';
import Draft from './components/Draft/Draft';
import Header from './components/Header/Header';

function App() {
   const [Plyers, setPlayers] = useState([]);
   const [draft, setDraft] = useState([]);

   useEffect(()=>{
     fetch('http://www.json-generator.com/api/json/get/bTCGZGzdfm?indent=2')
     .then(res => res.json())
     .then(data=>setPlayers(data))
     .catch(error => console.log(error))
   }, [])
   
   const handleAddPlayer = (Player) => {
     const newDraft = [...draft, Player];
     setDraft(newDraft);
    }

  return (
    <div >
       <Header></Header>
       <div >
<div className="player-Container">
      
      <div class="overflow-auto" id="Players-view" >
      {
        Plyers.map(player => <Player player={player} handleAddPlayer={handleAddPlayer}></Player>)
      }
      </div>
    <div id="draft-View">
       <Draft draft={draft}></Draft>
    </div>
      
    </div>
    </div>
    </div>
  );
}

export default App;
