import React, { useState } from "react";
import "./App.css";

import PokemonViewer from "../PokemonViewer";
import logo from './logo.jpg';

function App() {
	const [id, setId] = useState(Math.floor(Math.random() * 1000 + 1) + 1);

	function handleClick() {
		// TODO: Task 2 - Set id to be random number between 1 and 151
		setId(Math.floor(Math.random() * 1000 + 1) + 1);
	}

	return (
  
		<div className="App">
    <img className="logo" src={logo} alt="logo"></img>
			{/* TODO: Task 2 -  call handleClick when button clicked */}
			<button onClick={handleClick}>Get Random Pokemon</button>
			{/* TODO: Task 2 -  hand down id as a prop */}
			<PokemonViewer
				pokemon={PokemonViewer}
				id={id}
			/>
		</div>
	);
}

export default App;
