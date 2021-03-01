import React from 'react';
import './Player.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    // console.log(props)
    const{image , name , salary , team , role} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className = "player">
            <img src={image}alt=""/>
            <h3> {name} </h3>
            <h6>Salary : <span>₹ </span>{salary}</h6>
            <p>Team: {team}</p>
            <p>Role: {role}</p>
            <Button variant='success' onClick = {()=>handleAddPlayer(props.player)}><FontAwesomeIcon style = {{marginRight: '10px'}}icon={faPlus} />Add</Button>
        </div>
    );
};

export default Player;