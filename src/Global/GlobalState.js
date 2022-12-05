import React, { useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";

const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [gen, setGen] = useState("gen 1");

  const returnPokemonGens = () => {
    switch (gen) {
      case "gen 1":
        return {
          start: 0,
          end: 151,
        };
      case "gen 2":
        return {
          start: 151,
          end: 99,
        };
      case "gen 3":
        return {
          start: 251,
          end: 134,
        };
      case "gen 4":
        return {
          start: 386,
          end: 108,
        };
      case "gen 5":
        return {
          start: 494,
          end: 155,
        };
      case "gen 6":
        return {
          start: 649,
          end: 71
        }
      case "gen 7":
        return {
          start: 721,
          end: 87
        }
      case "gen 8":
        return {
          start: 809,
          end: 95
        }
      default:
        return {
          start: 0,
          end: 151,
        }
    }
  };

  
  const getAllPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${returnPokemonGens().start}&limit=${returnPokemonGens().end}`)
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addToPokedex = (pokemonToAdd) => {
    const isInPokedex = pokedex.some((pokemonPokedex) => {
      return pokemonPokedex.name === pokemonToAdd.name;
    });
    if (!isInPokedex) {
      const novaPokedex = [...pokedex, pokemonToAdd];
      setPokedex(novaPokedex);
      const newPokemons = pokemons.filter((pokemon) => {
        return pokemon.name !== pokemonToAdd.name;
      });

      setPokemons(newPokemons);
    } else {
      alert("Esse pokemon já está na pokedex");
    }
  };

  const removePokemon = (pokemonToRemove) => {
    const isInPokedex = pokedex.some((pokemonPokedex) => {
      return pokemonPokedex.name === pokemonToRemove.name;
    });
    if (isInPokedex) {
      const indexPokemon = pokedex.findIndex(
        (pokemon) => pokemon.name === pokemonToRemove.name
      );
      const newPokemons = [...pokemons, pokemonToRemove];

      setPokemons(newPokemons);
      pokedex.splice(indexPokemon, 1);
      alert(`${pokemonToRemove.name} foi removido da pokedex!!!`);
    } else {
      alert(`${pokemonToRemove.name} já foi removido da pokedex.`);
    }
  };

  const requests = { getAllPokemon };
  const states = { pokemons, pokedex, gen };
  const actions = { addToPokedex, removePokemon };
  const setters = { setGen };
  const data = { requests, states, actions, setters };

  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
