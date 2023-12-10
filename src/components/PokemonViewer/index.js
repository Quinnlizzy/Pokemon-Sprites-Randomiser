import React, { useState, useEffect } from "react";



function PokemonViewer({ id }) {
	//TODO: Task 1 - send http request to `https://pokeapi.co/api/v2/pokemon/1'
	//and display the data
	const [pokemon, setPokemon] = useState("");
	const [image, setImage] = useState("");

	async function fetchPokemon(id) {
		try {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon-form/${id}`,
				{
					headers: {
						Accept: "application/json",
					},
				}
			);
			if (!response.ok) {
				throw Error(response.status);
			}
			const data = await response.json();
			//select name from returned data
			// console.log(data.forms[0].name);
			setPokemon(data.name);
			setImage(data.sprites.front_default);
			console.log(data.sprites.front_default);
		} catch (error) {
			console.error("Error fetching pokemon:", error);
			setPokemon("failed to fetch");
		}
	}
	useEffect(() => {
		fetchPokemon(id);
	}, [id]);

	// TODO: Task 2 - send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
	// HINT: you will need useState and useEffect!
	return (
		<>
			<img className="img"
				alt={pokemon}
				src={image}></img>
			<div className="pokemon-viewer">{pokemon}</div>
		</>
	);
}

export default PokemonViewer;
