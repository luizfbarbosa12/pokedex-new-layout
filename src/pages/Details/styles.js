import styled from "styled-components";

export const Container = styled.div`
  padding: 2.75rem;
  background-color: #5e5e5e;
  min-height: 84.2vh;
`;

export const DetailsTitle = styled.h1`
  color: #fff;
  margin: 1rem 0;
`;
export const DetailsContainer = styled.main`
  width: 100%;
  border-radius: 2.375rem;
  background-color: ${(props) => props?.color};
  position: relative;
  display: flex;
  gap: 4.25rem;
  padding: 1.625rem 2.75rem;

  @media screen and (min-width: 1350px) and (max-width: 1900px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }

  @media screen and (min-width: 900px) and (max-width: 1350px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr;
  }

  @media screen and (min-width: 400px) and (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr;
    padding: 0.625rem 0.75rem;
    border-radius: 1rem;
  }
`;

export const PokemonSpritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.938rem;
`;

export const PokemonFront = styled.div`
  min-height: 13rem;
  min-width: 13rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PokemonBack = styled.div`
  min-height: 13rem;
  min-width: 13rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BaseStatsContainer = styled.div`
  min-height: min-content;
  width: 28.125rem;
  border-radius: 0.75rem;
  background-color: #ffffff;
  padding: 1rem;
`;

export const SpritesStatsGrid = styled.div`
  display: flex;
  gap: 2.125rem;

  @media screen and (min-width: 900px) and (max-width: 1350px) {
    grid-row: 1 / 2;
  }

  @media screen and (min-width: 400px) and (max-width: 900px) {
    grid-row: 1 / 2;
    gap: 1.125rem;
    min-height: max-content;
    width: 18.125rem;
  }
`;
export const PokemonDataContainer = styled.div`
  width: 18.25rem;
  color: #ffffff;
`;

export const MovesContainer = styled.div`
  width: 18.25rem;
  height: 19.375rem;
  border-radius: 0.5rem;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 1rem;
  flex-direction: column; ;
`;

export const PokeballWaterMark = styled.img`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 1;
`;
export const PokemonPicture = styled.img`
  height: 16.875rem;
  width: 16.875rem;
  position: absolute;
  top: -5.313rem;
  right: 1.875rem;
  z-index: 3;

  @media screen and (min-width: 900px) and (max-width: 1350px) {
    top: 37.313rem;
    right: 1.875rem;
    height: 24.875rem;
    width: 24.875rem;
  }

  @media screen and (min-width: 400px) and (max-width: 900px) {
    top: 37.313rem;
    right: 1.875rem;
    height: 19.875rem;
    width: 19.875rem;
  }
`;

export const AnimatedPokemonFront = styled.img`
  height: 12vh;
  cursor: pointer;
`;

export const StatName = styled.p`
  text-transform: capitalize;
  font-size: 0.75rem;
  color: #5e5e5e;
`;
export const StatBarContainer = styled.div`
  width: 18.75rem;
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  margin: 1rem 0;
  font-size: 0.75rem;
  color: #5e5e5e;
  font-weight: bold;
`;

export const MoveTag = styled.div`
  height: 2.313rem;
  min-width: 2.813rem;
  background-color: #ececec;
  border-radius: 0.75rem;
  border: 1px dashed black;
  font-size: 0.75rem;
  font-weight: lighter;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin: 0.5rem;
`;

export const MovesAndDataContainer = styled.div`
  @media screen and (min-width: 900px) and (max-width: 1350px) {
    grid-row: 2 / 3;
  }

  @media screen and (min-width: 400px) and (max-width: 900px) {
    grid-row: 2 / 3;
  }
`;
