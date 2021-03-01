import React from 'react';


const Club = (props) => {
    const club = props.club;
    let totalBudget = 0;
    for (let i = 0; i <club.length; i++) {
        const player = club[i];
        totalBudget = totalBudget + player.salary;
    }
    const budgetStyle = {border: '1px solid gray', padding: '8px', marginTop: '30px'}

    return (
        <div>
            <h5 style ={budgetStyle}>Total Budget: ₹ {totalBudget}</h5>
        </div>
    );
};

export default Club;