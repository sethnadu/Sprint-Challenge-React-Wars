import React, {useState, useEffect} from 'react';
import PersonCard from "./components/PersonCard.js";
import axios from "axios";
import './App.css';

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
      {Object.values(characters).map(object => {
        return <PersonCard key = {object.Name} name = {object.name} height = {object.height} birth = {object.birth_year} mass = {object.mass} gender ={object.gender} setNum = {num}/>
      })}
    </div>
  );
}

export default App;
