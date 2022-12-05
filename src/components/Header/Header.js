import React, { useContext } from "react";
import {
  Container,
  PokedexButton,
  AllPokemon,
  RemoveFromPokedex,
} from "./styles";
import pokemonLogo from "../../assets/pokemon-logo.png";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Global/GlobalContext";

const Header = (props) => {
  const navigate = useNavigate();
  const { actions } = useContext(GlobalContext);

  const goToHomePage = () => {
    navigate("/");
  };

  const goToPokedex = () => {
    navigate("/pokedex");
  };
  return (
    <Container>
      {props.showButton && (
        <AllPokemon onClick={goToHomePage}>Todos os Pokémons</AllPokemon>
      )}

      <img src={pokemonLogo} alt="Pokemon Logo" />
      {props.remove ? (
        <RemoveFromPokedex
          onClick={() => actions.removePokemon(props.currentPokemon)}
        >
          Excluir da Pokédex
        </RemoveFromPokedex>
      ) : (
        <PokedexButton onClick={goToPokedex}>Pokédex</PokedexButton>
      )}
    </Container>
  );
};

export default Header;
