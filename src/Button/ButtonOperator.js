import React from 'react';

const ButtonOperator = ({select, operator, onClick}) => (
    <button
        className="align"
        value={select}
        onClick={event => {
            event.preventDefault();
            onClick(select);
        }}>
        {operator}
    </button>
);

export default ButtonOperator;