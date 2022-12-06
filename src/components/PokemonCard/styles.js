import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  min-width: 24rem;
  max-width: 25rem;
  background-color: ${(props) => props.color};
  border-radius: 0.75rem;
  display: flex;
  position: relative;
  margin: 3.125rem;
  color: #ffffff;

  @media screen and (min-width: 390px) and (max-width: 500px) {
    min-width: 22rem;
    max-width: 21rem;
    margin: 2.125rem 0;
  }
`;

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;

  @media screen and (min-width: 390px) and (max-width: 500px) {
    font-size: 0.875rem;
  }
`;

export const PokemonName = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 0.625rem;
  text-transform: capitalize;

  @media screen and (min-width: 390px) and (max-width: 500px) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const PokemonType = styled.img`
  max-width: 6.25rem;
  height: 2rem;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 0.5rem;

  @media screen and (min-width: 390px) and (max-width: 500px) {
    max-width: 5rem;
    height: 1.5rem;
    margin-right: 0.25rem;
  }
`;

export const TypesContainer = styled.div`
  margin-bottom: 3.25rem;

  @media screen and (min-width: 390px) and (max-width: 500px) {
    margin-bottom: 2.5rem;
  }
`;
export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;

  @media screen and (min-width: 390px) and (max-width: 500px) {
    height: 100%;
  }
`;

export const CatchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.625rem;
  width: 9.125rem;
  height: 2.375rem;
  background: #ffffff;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 0.625rem;
  right: 1.375rem;
  z-index: 2;
  color: #000;

  @media screen and (min-width: 390px) and (max-width: 500px) {
    padding: 0.15rem 0.375rem;
    width: 8.750rem;
    height: 1.725rem;
  }
`;

export const RemovePokemonButton = styled(CatchButton)`
  background: #ff6262;
  color: #fff;
`;

export const Pokemon = styled.img`
  width: 12.063rem;
  height: 12.063rem;
  position: absolute;
  top: -3.75rem;
  right: 0;
  z-index: 2;

  @media screen and (min-width: 390px) and (max-width: 500px) {
    width: 10.063rem;
  height: 10.063rem;
  }
`;

export const DetailsButton = styled.p`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
