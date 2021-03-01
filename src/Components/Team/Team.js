import React, { useEffect, useState } from 'react';
import playerData from '../../data/data.json';
import Club from '../Club/Club';
import Player from './Player/Player';
import './Team.css';

const Team = () => {
    const [players , setPlayers] = useState(playerData);
    const [selectedPlayer , setSelectedPlayer] = useState([]);
    useEffect (()=> {
        setPlayers(playerData);
    },[])

    const handleAddPlayer = (player) => {
        const newSelectedPlayer = [...selectedPlayer , player];
        setSelectedPlayer(newSelectedPlayer);
    }

    return (
       <div className = "team-container">
            <div className="player-container">
                {
                    players.map(player=> <Player player ={player} handleAddPlayer = {handleAddPlayer} key = {player.id}></Player>)
                }
            </div>
            <div className="selection-container">
                <h3>Selected Players</h3>
                <h4 style = {{marginBottom:'20px'}}>Total Players Selected: {selectedPlayer.length}</h4>
                <h5 className= "ShowPlayer"> 
                    {
                        selectedPlayer.map(selectedPlayers => 
                        <div>
                            <p>Name: {selectedPlayers.name}
                            <span style={{marginLeft : '10px'}}>Salary: ₹ {
                            
                            selectedPlayers.salary}</span></p>
                        </div>
                        )
                    }
                </h5>
                <Club club = {selectedPlayer}></Club>
            </div>
            
        </div>
    );
};

export default Team;