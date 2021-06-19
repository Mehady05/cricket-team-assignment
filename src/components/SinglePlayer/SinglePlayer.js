import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'

const SinglePlayer = ({player, handleClickPlayer}) => {
    return (
        <div className='p-4 border border-info'>
            <p>{<img className='img-fluid w-50 img-thumbnail' src={player.photo}/>}</p>
            <p>Name:{player.name}</p>
            <p>Slalary: {player.salary}</p>
            <button onClick={()=> handleClickPlayer(player)} className='btn-info border-0'> <FontAwesomeIcon icon={faHandPointRight} /> Add Me</button>
        </div>
    );
};

export default SinglePlayer;