import React, { useEffect, useState } from "react";
import {
  DetailsContainer,
  PokemonDataContainer,
  BaseStatsContainer,
  MovesContainer,
  PokemonBack,
  PokemonFront,
  Container,
  PokeballWaterMark,
  PokemonPicture,
  AnimatedPokemonFront,
  StatName,
  StatBarContainer,
  MoveTag,
  PokemonSpritesContainer,
  SpritesStatsGrid,
  DetailsTitle,
  MovesAndDataContainer
} from "./styles";
import { getTypes } from "../../utils/ReturnPokemonType";
import { getColors } from "../../utils/ReturnCardColor";
import pokeball from "../../assets/pokeball-big.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import Progress from "../../components/ProgressBar/ProgressBar";
import {
  PokemonName,
  PokemonNumber,
  PokemonType,
  TypesContainer,
} from "../../components/PokemonCard/styles";
import Header from "../../components/Header/Header";
const DetailsPage = (props) => {
  const params = useParams();
  const [pokemonDetails, setPokemonDetails] = useState();
  const [shiny, setShiny] = useState(false);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`)
      .then((res) => {
        setPokemonDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

  return (
    <>
    <Header showButton remove currentPokemon={pokemonDetails}/>
      <Container>
        <DetailsTitle>Detalhes</DetailsTitle>
        <DetailsContainer color={getColors(pokemonDetails?.types[0].type.name)}>
          <SpritesStatsGrid>
            <PokemonSpritesContainer>
              <PokemonFront>
                <AnimatedPokemonFront
                  onClick={() => setShiny(!shiny)}
                  src={
                    pokemonDetails?.sprites.versions["generation-v"][
                      "black-white"
                    ].animated[`${shiny ? "front_shiny" : "front_default"}`]
                  }
                  alt="pokemon front sprite"
                />
              </PokemonFront>
              <PokemonBack>
                {" "}
                <AnimatedPokemonFront
                  onClick={() => setShiny(!shiny)}
                  src={
                    pokemonDetails?.sprites.versions["generation-v"][
                      "black-white"
                    ].animated[`${shiny ? "back_shiny" : "back_default"}`]
                  }
                  alt="pokemon back sprite"
                />
              </PokemonBack>
            </PokemonSpritesContainer>
            <BaseStatsContainer>
              <h1>Base Stats</h1>
              {pokemonDetails?.stats.map((stat, index) => {
                return (
                  <StatBarContainer key={index}>
                    <div>
                      <StatName>{stat.stat.name}</StatName>
                    </div>
                    <div>
                      <Progress done={stat.base_stat} />{" "}
                    </div>
                  </StatBarContainer>
                );
              })}
            </BaseStatsContainer>
          </SpritesStatsGrid>
          <MovesAndDataContainer>
            <PokemonDataContainer>
              <PokemonNumber>#{pokemonDetails?.id}</PokemonNumber>
              <PokemonName>{pokemonDetails?.name}</PokemonName>
              <TypesContainer>
                {pokemonDetails?.types.map((type, index) => {
                  return (
                    <PokemonType
                      key={index}
                      src={getTypes(type.type.name)}
                      alt=""
                    />
                  );
                })}
              </TypesContainer>
            </PokemonDataContainer>
            <MovesContainer>
              {pokemonDetails?.moves.splice(0, 6).map((move, index) => {
                return <MoveTag key={index}>{move.move.name}</MoveTag>;
              })}
            </MovesContainer>
          </MovesAndDataContainer>
          <PokemonPicture
            src={
              pokemonDetails?.sprites.other["official-artwork"].front_default
            }
            alt=""
          />
          <PokeballWaterMark src={pokeball} alt="" />
        </DetailsContainer>
      </Container>
    </>
  );
};

export default DetailsPage;
