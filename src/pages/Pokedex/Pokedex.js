import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import { GlobalContext } from "../../Global/GlobalContext";
import { CardsContainer } from "../../pages/Home/style";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { Loading } from "../../components/Loading/Loading";
import { Toaster } from 'react-hot-toast';

const Pokedex = () => {
  const { states } = useContext(GlobalContext);

  return (
    <>
    <Toaster/>
      <Header showButton />
      {states.pokedex.length === 0 ? <Loading/> : (<CardsContainer>
        {states.pokedex &&
          states.pokedex.map((pokemon) => {
            return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
          })}
      </CardsContainer>)}
      
    </>
  );
};

export default Pokedex;
