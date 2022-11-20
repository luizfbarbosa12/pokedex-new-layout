import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import { GlobalContext } from "../../Global/GlobalContext";
import { CardsContainer } from "../../pages/Home/style";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
const Pokedex = () => {
  const { states } = useContext(GlobalContext);

  return (
    <>
      <Header showButton />
      <CardsContainer>
        {states.pokedex ?
          states.pokedex.map((pokemon) => {
            return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
          }) : "Não tem nenhum pokemon aqui"}
      </CardsContainer>
    </>
  );
};

export default Pokedex;
