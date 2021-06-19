import React from 'react';

const CartDetails = (props) => {
    const cp = props.cp;
    return (
        <div className="border border-danger p-2 mb-1">
            <img className="img-fluid w-50" src={cp.photo} alt=''/>
            <h2>Name:{cp.name}</h2>
        </div>
    );
};

export default CartDetails;