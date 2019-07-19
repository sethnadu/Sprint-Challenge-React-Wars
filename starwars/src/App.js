import React, {useState, useEffect} from 'react';
import PersonCard from "./components/PersonCard.js";
import styled from "styled-components";
import axios from "axios";
import './App.css';




// Styled Components for APP

const BoxesTogether = styled.div `
padding-top: 50px;
display: flex;
flex-flow: row wrap;
justify-content: center;
margin: auto;
width: 100%;

`




const App = () => {
  const [characters, setCharacters] = useState("");
  const [num, setNum] = useState("1");

  useEffect(() => {
    axios
    .get(`https://swapi.co/api/people/?page=${num}`)
    .then((response) => {
      setCharacters(response.data.results);
      console.log(response.data.results)
    })
    .catch((error) => {
      console.log("Something went Wrong!", error)
    })
  }, [num])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <BoxesTogether>
      {Object.values(characters).map(object => {
        return <PersonCard key = {object.name} name = {object.name} height = {object.height} birth = {object.birth_year} mass = {object.mass} gender ={object.gender} setNum = {num}/>
      })}
      </BoxesTogether>
    </div>
  );
}

export default App;
