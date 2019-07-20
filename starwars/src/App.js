import React, { useState, useEffect } from "react";
import PersonCard from "./components/PersonCard.js";
import GetCharacters from "./components/GetCharacters.js";
import styled from "styled-components";
import axios from "axios";
import "./App.scss";


// SnapShot
// import '@testing-library/react/cleanup-after-each';
// import '@testing-library/jest-dom/extend-expect';
// import {render, fireEvent} from '@testing-library/react';
// import HiddenMessage from './HiddenMessage';

 // Snapshot
//  test('shows the props when the checkbox is checked', () => {
//   const testMessage = 'Test Message';
//   const {queryByText, getByLabelText, getByText} = render(
//     <HiddenMessage>{testMessage}</HiddenMessage>
//   )
//   expect(queryByText(testMessage)).toBeNull()
// })






// Styled Components for APP

const BoxesTogether = styled.div`
  padding-top: 50px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: auto auto 50px auto;
  width: 100%;
`;

const Header = styled.h1`
  font-size: 5rem;
  text-shadow: -2px 0 #ffe300, 0 2px #ffe300, 2px 0 #ffe300, 0 -2px #ffe300;
`;

const Line = styled.div`
  border-top: 4px solid black;
  border-bottom: 4px solid #ffe300;
  margin: -40px auto 40px auto;
  width: 300px;
  display: flex;
  justify-content: center;
`;

const App = () => {

  // useStates

  const [characters, setCharacters] = useState("");
  const [num, setNum] = useState("https://swapi.co/api/people/?page=1");
  const [change, setChange] = useState("");
  // const [films, setFilms] = useState("");
 
  
 

  //  uesEffect call to axios, setStates

  useEffect(() => {
    axios
      // .get(`https://swapi.co/api/people/?page=${num}`)
      .get(`${num}`)
      .then(response => {
        setCharacters(response.data.results);
        setChange(response.data);

        // console.log(response.data.results)
        // console.log(response.data)
      })
      .catch(error => {
        console.log("Something went Wrong!", error);
      });
  }, [num]);

  return (
    <div className="App">
      <Header>React Wars</Header>
      <Line />
      <GetCharacters
        next={change.next}
        previous={change.previous}
        setNum={setNum}
      />

      <BoxesTogether>
        {Object.values(characters).map(object => {
          return (
            <PersonCard
                object = {object}
              // key={object.name}
              // name={object.name}
              // height={object.height.toUpperCase()}
              // birth={object.birth_year.toUpperCase()}
              // hairColor ={object.hair_color.toUpperCase()}
              // eyeColor ={object.eye_color.toUpperCase()}
              // mass={object.mass.toUpperCase()}
              // gender={object.gender.toUpperCase()}
              // film = {film}
              // setFilm = {setFilm}
            />
          );
        })}
      </BoxesTogether>
     
    </div>
  );
};

export default App;
