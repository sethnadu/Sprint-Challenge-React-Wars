import React from 'react';
import styled from "styled-components";


const Buttons = styled.button `
    color: #ffe300;
    cursor: pointer;
    width: 100px;
    font-size: 1.2rem;
    margin: 10px;
    background: black;
    border: 2px solid #ffe300;
    border-radius: 5px;
    padding: 5px 10px;

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