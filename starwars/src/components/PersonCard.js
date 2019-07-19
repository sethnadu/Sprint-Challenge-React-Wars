import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  border: 4px solid #ffe300;
  color: #ffe300;
  background: black;
  width: 500px;
  margin: 20px;
  flex-direction: column;
  border-radius: 10px;

  &: hover {
    box-shadow: 5px 10px 20px black;
  }
`;

const Span = styled.span`
  font-size: 1.2rem;
  color: white;
`;

const SmallBox = styled.div`
 display: flex;
 flex-direction: column;
 width; 100px;
 margin: auto;
 text-align: left;

`;

function PersonCard(props) {
  return (
    <Box>
      <h1>{props.name}</h1>
      <SmallBox>
        <p>
          <Span>Gender: </Span>
          {props.gender}
        </p>
        <p>
          <Span>Height: </Span>
          {props.height}
        </p>
        <p>
          <Span>Mass: </Span>
          {props.mass}
        </p>
        <p>
          <Span>Birth Year: </Span>
          {props.birth}
        </p>
      </SmallBox>
    </Box>
  );
}

export default PersonCard;
