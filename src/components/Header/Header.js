import React, {useContext} from "react";
import { Container, PokedexButton, AllPokemon, RemoveFromPokedex } from "./styles";
import pokemonLogo from '../../assets/pokemon-logo.png'
import {  useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Global/GlobalContext";

const Header = (props) => {
  const navigate = useNavigate()
  const {actions} = useContext(GlobalContext)
  // const pokemontypesArray = [
  //   "Normal",
  //   "Fire",
  //   "Water",
  //   "Grass",
  //   "Flying",
  //   "Fighting",
  //   "Poison",
  //   "Electric",
  //   "Ground",
  //   "Rock",
  //   "Psychic",
  //   "Ice",
  //   "Bug",
  //   "Ghost",
  //   "Steel",
  //   "Dragon",
  //   "Dark",
  //   "Fairy",
  // ];

  // const handleSearch = (e) => {
  //   props.setPesquisa(e.target.value);
  // };

  // const handleTypeSearch = (e) => {
  //   props.setTypeFilter(e.target.value);
  // };

  // const handleIdSearch = (e) => {
  //   props.setIdFilter(e.target.value);
  // };


const goToHomePage = () => {
  navigate('/')
}

const goToPokedex = () => {
  navigate('/pokedex')
}
  return (
    <Container>
      {props.showButton && <AllPokemon onClick={goToHomePage}>Todos os Pokémons</AllPokemon>}
      
        {/* <input
        type="number"
        placeholder="Buscar por id"
        onChange={handleIdSearch}
        value={props.idFilter}
      />
      <input
        type="text"
        placeholder="Buscar por nome"
        onChange={handleSearch}
        value={props.pesquisa}
      />
      <select onChange={(event) => props.setOrder(event.target.value)}>
        <option value="">Selecione uma ordem</option>
        <option value="cres">Crescente</option>
        <option value="desc">Decrescente</option>
      </select>
      <select
        name="tipo"
        id="tipo"
        onChange={handleTypeSearch}
        value={props.typeFilter}
      >
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select> */}
      <img src={pokemonLogo} alt="Pokemon Logo" />
      {props.remove ? <RemoveFromPokedex onClick={actions.removePokemon}>Excluir da Pokédex</RemoveFromPokedex> :  <PokedexButton onClick={goToPokedex}>Pokédex</PokedexButton>}
     
    </Container>
  );
};

export default Header;
