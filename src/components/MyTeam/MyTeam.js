import React from 'react';
import CartDetails from './../CartDetails/CartDetails';

const MyTeam = (props) => {
    console.log(props);
   const cartPlayer = props.cartPlayer;
   console.log(cartPlayer);

   const totalSalary = cartPlayer.reduce((total, player)=> total+Math.ceil(parseFloat(player.salary)) ,0);

Math.ceil()
    return (
        <div>     
            <p>Total Cost : {totalSalary}</p>
            {
                cartPlayer.map(cp=> <CartDetails cp={cp}></CartDetails>)
            }
        </div>
    );
};

export default MyTeam;