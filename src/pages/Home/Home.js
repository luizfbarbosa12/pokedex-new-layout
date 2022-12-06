import React, { useEffect, useContext } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { CardsContainer, PaginationContainer, GenerationSelect, SearchInput } from "./style";
import { GlobalContext } from "../../Global/GlobalContext";
import useForm from "../../hooks/useForm";
import { Toaster } from 'react-hot-toast';

const Home = (props) => {
  const { requests, states, setters } = useContext(GlobalContext);
  const [form, onChange] = useForm({ query: "", order: '' });

  useEffect(() => {
    if (states.pokedex.length === 0) {
      requests.getAllPokemon();
    }
  }, [states.gen]);

 const selectGen = (e) => {
  setters.setGen(e.target.value)
 }

 
  return (
    <>
    <Toaster />
      <Header />
      <PaginationContainer>
          <GenerationSelect onChange={selectGen}>
            <option value={'gen 1'}>Gen 1</option>
            <option value={'gen 2'}>Gen 2</option>
            <option value={'gen 3'}>Gen 3</option>
            <option value={'gen 4'}>Gen 4</option>
            <option value={'gen 5'}>Gen 5</option>
            <option value={'gen 6'}>Gen 6</option>
            <option value={'gen 7'}>Gen 7</option>
            <option value={'gen 8'}>Gen 8</option>
          </GenerationSelect>
      <SearchInput
        type="text"
        placeholder="Buscar por nome"
        onChange={onChange}
        value={form.query}
        name="query"
      />
      <GenerationSelect onChange={onChange} value={form.order} name="order">
        <option value="">Selecione uma ordem</option>
        <option value="cres">Ordem alfabética</option>
        <option value="desc">Ordem Alfabética Invertida</option>
      </GenerationSelect>
        </PaginationContainer>
      <CardsContainer>
        {states.pokemons &&
          states.pokemons
              .filter((pokemon) => {
                return pokemon.name
                  .toLowerCase()
                  .includes(form.query.toLowerCase());
              })
              .sort((a, b) => {
                return a.name < b.name && form.order === "cres" ? -1 : 1;
              })
              .sort((a, b) => {
                return a.name > b.name && form.order === "desc" ? -1 : 1;
              })
            .map((pokemon) => {
              return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
            })}
      </CardsContainer>
    </>
  );
};

export default Home;
