import React from "react";
// import Films from "./Films";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  border: 4px solid #ffe300;
  color: #ffe300;
  background-color: black;
  width: 500px;
  margin: 20px;
  flex-direction: column;
  border-radius: 10px;

  &: hover {
    box-shadow: 10px 10px 40px black;
    background: url("https://ak3.picdn.net/shutterstock/videos/22001743/thumb/1.jpg?ip=x480");
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
      <h1>{props.object.name}</h1>
      <SmallBox>
        <p>
          <Span>Gender: </Span>
          {props.object.gender.toUpperCase()}
        </p>
        <p>
          <Span>Height: </Span>
          {props.object.height.toUpperCase()}
        </p>
        <p>
          <Span>Mass: </Span>
          {props.object.mass.toUpperCase()}
        </p>
        <p>
          <Span>Hair Color: </Span>
          {props.object.hair_color.toUpperCase()}
        </p>
        <p>
          <Span>Eye Color: </Span>
          {props.object.eye_color.toUpperCase()}
        </p>
        <p>
          <Span>Birth Year: </Span>
          {props.object.birth_year.toUpperCase()}
        </p>
       {/* <Films setFilm = {props.setFilm} film = {props.film} /> */}
      </SmallBox>
    </Box>
  );
}

export default PersonCard;
