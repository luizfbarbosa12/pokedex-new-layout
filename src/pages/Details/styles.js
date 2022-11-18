import styled from "styled-components";

export const Container = styled.div`
  padding: 44px;
  background-color: #5e5e5e;
  min-height: 84.2vh;
`;
export const DetailsContainer = styled.main`
  width: 100%;
  border-radius: 38px;
  background-color: ${(props) => props?.color};
  position: relative;
  display: flex;
  gap: 68px;
  padding: 26px 44px; ;
`;

export const PokemonSpritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 47px;
`;
export const PokemonFront = styled.div`
  min-height: 13rem;
  min-width: 13rem;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PokemonBack = styled.div`
  min-height: 13rem;
  min-width: 13rem;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BaseStatsContainer = styled.div`
  min-height: min-content;
  width: max-content;
  border-radius: 12px;
  background-color: #ffffff;
  padding: 16px;
`;

export const SpritesStatsGrid = styled.div`
  display: flex;
  gap: 34px;
`;
export const PokemonDataContainer = styled.div`
  width: 292px;
  color: #ffffff;
`;

export const MovesContainer = styled.div`
  width: 292px;
  height: 310px;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 16px;
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
  height: 270px;
  width: 270px;
  position: absolute;
  top: -85px;
  right: 30px;
  z-index: 3; ;
`;
export const AnimatedPokemonFront = styled.img`
  height: 12vh;
`;

export const StatName = styled.p`
  text-transform: capitalize;
  font-size: 12px;
  color: #5e5e5e;
`;
export const StatBarContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  margin: 16px 0;
  font-size: 12px;
  color: #5e5e5e;
  font-weight: bold;
`;

export const MoveTag = styled.div`
  height: 37px;
  min-width: 45px;
  background-color: #ececec;
  border-radius: 12px;
  border: 1px dashed black;
  font-size: 12px;
  font-weight: lighter;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin: 8px;
`;
