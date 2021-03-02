import React from 'react';

const Draft = (props) => {
    const draft = props.draft;
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
    return (

        <div className="draft-container">
            <h2>Selected {draft.length} player</h2>

            <div class="card" >
                <div class="card-header">
                    Players
  </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> {playerName}-${salary}</li>
                </ul>
                <li class="list-group-item">Total Budget:$ {totalSalary} </li>
            </div>
        </div>
    );
};

export default Draft;