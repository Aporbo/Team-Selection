import React from 'react';

const Draft = (props) => {
    const draft = props.draft;
if(draft.length<11){
    const totalSalary = draft.reduce((sum, player) => sum + player.salary, 0)
    let playerName;
    for (let i = 0; i < draft.length; i++) {
        const player = draft[i];
        playerName = player.name;
    }
    let salary;
    for (let i = 0; i < draft.length; i++) {
        const Salary = draft[i];
        salary = Salary.salary;
    }

    let playerNames=[];
    for (let i = 0; i < draft.length; i++) {
        const player = draft[i];
        playerNames[i] = player.name;
    }
    return (

        <div className="draft-container">
            <h2>Selected {draft.length} player</h2>

            <div class="card" >
                <div class="card-header">
                  Latest Selected Player
  </div>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item">  {playerName}-${salary}</li>
                </ul>
                <div class="card border-success mb-3">
  <div class="card-header">Selected Players</div>
  <div class="card-body text-success">   
    <p class="card-text"><ul>
    {
        playerNames.map((m)=> <li>{m}</li>)
    }
</ul></p>
  </div>
</div>

                <li class="list-group-item">Total Budget:$ {totalSalary} </li>
                  
            </div>
        </div>
        
    );  
}
  else{
      alert("you can not select more then 11 player")
  }
};

export default Draft;