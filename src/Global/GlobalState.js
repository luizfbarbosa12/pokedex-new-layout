import React, { useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";

const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  const getAllPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`)
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addToPokedex = (pokemonToAdd) => {
    const isInPokedex = pokedex.some((pokemonPokedex) => {
        return pokemonPokedex.name === pokemonToAdd.name
      })
      if(!isInPokedex) {
        const novaPokedex = [...pokedex, pokemonToAdd];
        setPokedex(novaPokedex);
        const newPokemons = pokemons.filter((pokemon) => {
            return pokemon.name !== pokemonToAdd.name
        })

        setPokemons(newPokemons)
      } else {
        alert("Esse pokemon já está na pokedex")
      } 

  };

  const removePokemon = (pokemonToRemove) => {
    const isInPokedex = pokedex.some((pokemonPokedex) => {
        return pokemonPokedex.name === pokemonToRemove.name
      })
    if(isInPokedex) {
        const indexPokemon = pokedex.findIndex((pokemon) => pokemon.name === pokemonToRemove.name);
        const newPokemons = [...pokemons, pokemonToRemove]
    
        setPokemons(newPokemons)
        pokedex.splice(indexPokemon, 1)

        alert(`${pokemonToRemove.name} foi removido da pokedex!!!`)       
    }else{
        alert(`${pokemonToRemove.name} já foi removido da pokedex.`) 
      }
    
  };

  const requests = { getAllPokemon };
  const states = { pokemons, pokedex };
  const actions = { addToPokedex, removePokemon };
  const data = { requests, states, actions };

  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
