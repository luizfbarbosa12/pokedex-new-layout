import React from "react";
import {
  DetailsContainer,
  PokemonDataContainer,
  BaseStatsContainer,
  MovesContainer,
  PokemonBack,
  PokemonFront,
  Container,
  PokeballWaterMark
} from "./styles";
import pokeball from '../../assets/pokeball-big.png'

const DetailsPage = (props) => {
  return (
    <Container>
      <h1>Detalhes</h1>
      <DetailsContainer color="#BF9762">
        <PokemonFront>Pokemon frente</PokemonFront>
        <PokemonBack>Pokemon trás</PokemonBack>
        <BaseStatsContainer>Base stats</BaseStatsContainer>
        <PokemonDataContainer>nome e dados pokemon</PokemonDataContainer>
        <MovesContainer>moves</MovesContainer>
        <img src="" alt="" />
        <PokeballWaterMark src={pokeball} alt="" />
      </DetailsContainer>
    </Container>
  );
};

export default DetailsPage;
