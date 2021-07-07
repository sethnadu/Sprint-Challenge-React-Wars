import React from 'react';
import styled from "styled-components";


const Buttons = styled.button `
    color: #ffe300;
    cursor: pointer;
    width: 100px;
    font-size: 1.2rem;
    margin: 10px;
    background: url("https://ak3.picdn.net/shutterstock/videos/22001743/thumb/1.jpg?ip=x480");
    background-color: black;
    border: 2px solid #ffe300;
    border-radius: 5px;
    padding: 5px 10px;

    &:hover {
        transform: scale(1.5);
        background-image: url("https://static.comicvine.com/uploads/original/11125/111252200/5638741-green.jpg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

`;

function GetCharacters (props) {


    return (
        <div>
        <Buttons onClick = {() => props.setNum(props.previous)}>Previous</Buttons>
        <Buttons onClick = {() => props.setNum(props.next)}>Next</Buttons>
        </div>
    )
}

export default GetCharacters;