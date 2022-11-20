import React, { useEffect, useState, useContext } from "react";
import {
  Container,
  PokemonNumber,
  PokemonName,
  PokemonType,
  TypesContainer,
  Pokeball,
  CatchButton,
  Pokemon,
  DetailsButton
} from "./styles";
import pokeball from "../../assets/pngwing 2.png";
import { getTypes } from "../../utils/ReturnPokemonType";
import { GlobalContext } from "../../Global/GlobalContext";
import { getColors } from "../../utils/ReturnCardColor";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PokemonCard = (props) => {
  const { actions } = useContext(GlobalContext);
  const [pokemon, setPokemon] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.pokemon.name}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const seeDetails = (pokemonName) => {
    navigate(`/details/${pokemonName}`)
  };

  return (
    <Container color={getColors(pokemon?.types[0].type.name)}>
      <div>
        <PokemonNumber>#{pokemon?.id}</PokemonNumber>
        <PokemonName>{pokemon?.name}</PokemonName>
        <TypesContainer>
          {pokemon?.types.map((type, index) => {
            return (
              <PokemonType key={index} src={getTypes(type.type.name)} alt="" />
            );
          })}
        </TypesContainer>
        <DetailsButton onClick={() => seeDetails(pokemon?.name)}>Detalhes</DetailsButton>
      </div>
      <div>
        <Pokemon
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
        <CatchButton onClick={() => actions.addToPokedex(pokemon)}>Capturar!</CatchButton>
      </div>
      <Pokeball src={pokeball} alt="pokeball" />
    </Container>
  );
};

export default PokemonCard;
