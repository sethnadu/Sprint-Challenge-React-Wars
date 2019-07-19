import React from 'react';

function PersonCard (props) {

    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.gender}</p>
            <p>{props.height}</p>
            <p>{props.mass}</p>
            <p>{props.birth}</p>
        </div>
    )
}

export default PersonCard;