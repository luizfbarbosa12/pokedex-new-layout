import styled from "styled-components";

export const Container = styled.div`
    padding: 44px;
    background-color: #5e5e5e;
    min-height: 84.2vh;
`
export const DetailsContainer = styled.main`
  width: 100%;
  max-height: 68vh;
  border-radius: 38px;
  background-color: ${(props) => props?.color};
  display: grid;
  grid-template-columns: 350px 350px 350px 350px;
  grid-template-rows: repeat(5, 1fr);
  justify-items: center;
  position: relative;
`;

export const PokemonFront = styled.div`
  min-height: 282px;
  width: 282px;
  background-color: #ffffff;
  border-radius: 8px;
  grid-row: 2 / 3;
`;

export const PokemonBack = styled.div`
  min-height: 282px;
  width: 282px;
  background-color: #ffffff;
  border-radius: 8px;
  grid-row: 4 / 5;
`;

export const BaseStatsContainer = styled.div`
  max-height: 613px;
  width: 343px;
  border-radius: 12px;
  background-color: #ffffff;
  grid-row: 2 / 5;
  grid-column: 2 / 3;
  align-self: left;
  justify-self: start;
`;
export const PokemonDataContainer = styled.div`
  border: 1px solid red;
  width: 292px;
  grid-row: 2 / 3;
  grid-column: 3 / 4;
  justify-self: end;

`;
export const MovesContainer = styled.div`
  width: 292px;
  max-height: 453px;
  border-radius: 8px;
  background-color: #ffffff;
  grid-row: 3 / 5;
  grid-column: 3 / 4;
  justify-self: end;
`;

export const PokeballWaterMark = styled.img`
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
`
