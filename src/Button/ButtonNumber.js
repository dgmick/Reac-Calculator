import React from 'react';

const ButtonNumber = ({select, number, onClick}) => (
    <button
        className="align"
        value={select}
        onClick={event => {
            event.preventDefault();
            onClick(select);
        }}>
        {number}
    </button>
);

export default ButtonNumber

/* (event, param2) => {
maFonction();
}

function () {
maFonction();
}
 */