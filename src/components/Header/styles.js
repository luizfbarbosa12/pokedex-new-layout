import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
  justify-content: space-around;


  @media screen and (min-width: 350px) and (max-width: 640px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2rem 1fr 1fr;
    justify-items: center;
    gap: 1rem;
  }
`;

export const PokemonLogo = styled.img`
  @media screen and (min-width: 750px) and (max-width: 900px) {
    width: 310px;
    height: 90px;
  }

  @media screen and (min-width: 350px) and (max-width: 640px) {
    width: 200px;
    height: 62px;
  }
`
export const PokedexButton = styled.button`
  width: 17.938rem;
  background-color: #33a4f5;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  height: 4.625rem;
  font-size: 1.5rem;
  color: white;
  font-weight: 700;

  @media screen and (min-width: 390px) and (max-width: 900px) {
    width: 200px;
    height: 62px;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 350px) and (max-width: 640px) {
    width: 200px;
    height: 3.625rem;
  }
`;
export const AllPokemon = styled.div`
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;

  @media screen and (min-width: 750px) and (max-width: 1200px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 390px) and (max-width: 825px) {
    font-size: 1rem;
  }

`;

export const RemoveFromPokedex = styled(PokedexButton)`
  background-color: #ff6262;
`;
