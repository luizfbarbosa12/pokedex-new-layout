import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import { GlobalContext } from "../../Global/GlobalContext";
import { CardsContainer } from "../../pages/Home/style";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
const Pokedex = () => {
  const { pokedex } = useContext(GlobalContext);

  console.log(pokedex)
  return (
    <>
      <Header showButton />
      <CardsContainer>
        {/* {pokedex &&
          pokedex.map((pokemon) => {
            return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
          })} */}
      </CardsContainer>
    </>
  );
};

export default Pokedex;
