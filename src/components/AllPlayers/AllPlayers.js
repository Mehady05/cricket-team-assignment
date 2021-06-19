import React, { useEffect } from 'react';
import { useState } from 'react';
import './AllPlayers.css';
import playersDetails from '../../fakeData/fakeData.json'
import SinglePlayer from './../SinglePlayer/SinglePlayer';
import MyTeam from './../MyTeam/MyTeam'


const AllPlayers = () => {

    const [cartPlayer, setCartPlayer] = useState([]);
    console.log(cartPlayer)
    const handleClickPlayer = (player)=>{
        const detailPlayer = [...cartPlayer, player];
        setCartPlayer(detailPlayer);
    }


    const [players, setPlayers] = useState([]);


    useEffect(()=>{
        setPlayers(playersDetails)
    },[])
    return (
        <div className ='container border border-success'>
            <div className='row'>
                <div className='col-md-8'>
                    {
                    players.map(player=><SinglePlayer player= {player} handleClickPlayer={handleClickPlayer}></SinglePlayer>)
                    }
                </div>
                <div className='col-md-4'>
                    <h1 className='text-danger'>My BPL Team</h1>
                   <MyTeam cartPlayer={cartPlayer}></MyTeam>
                </div>
            </div>
        </div>
    );
};

export default AllPlayers;