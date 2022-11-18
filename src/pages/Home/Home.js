import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { CardsContainer } from "./style";
import { GlobalContext } from "../../Global/GlobalContext";

const Home = (props) => {
    const {requests, states} = useContext(GlobalContext)
  const [pesquisa, setPesquisa] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [idFilter, setIdFilter] = useState("");
  const [order, setOrder] = useState("");

  useEffect(() => {
      requests.getAllPokemon()
  }, []);

  return (
      <CardsContainer>
        {states.pokemons && states.pokemons
        //   .filter((pokemon) => {
        //     return idFilter ? pokemon.id.includes(idFilter) : pokemon;
        //   }) // nesse filtro, se voce inserir apenas return pokemon.id.includes(idFilter), a tela ficará em branco porque nenhum id é === "", que é o estado inicial. Então, fazendo um ternário, ele retorna o pokemon, caso não passe no filtro.
        //   .filter((pokemon) => {
        //     return pokemon.name.english
        //       .toLowerCase()
        //       .includes(pesquisa.toLowerCase());
        //   })
        //   .filter((pokemon) => {
        //     return typeFilter ? pokemon.type.includes(typeFilter) : pokemon;
        //   })
        //   .sort((a, b) => {
        //     return a.name.english < b.name.english && order === "cres" ? -1 : 1;
        //   })
        //   .sort((a, b) => {
        //     return a.name.english > b.name.english && order === "desc" ? -1 : 1;
        //   }) //a mesma coisa acontece aqui
          .map((pokemon) => {
            return (
              <PokemonCard
                setCurrentPage={props.setCurrentPage}
                key={pokemon.name}
                pokemon={pokemon}
              />
            );
          })}
      </CardsContainer>
  );
};

export default Home;
