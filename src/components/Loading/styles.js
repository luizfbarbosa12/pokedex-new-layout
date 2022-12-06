import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
`;

export const Pikachu = styled.img`
  height: 50vh;
  width: 50vh;
  @media screen and (min-width: 20rem) and (max-width: 50rem) {
    height: 30vh;
    width: 30vh;
  }
  @media screen and (min-width: 51.25rem) and (max-width: 71.875rem) {
    height: 35vh;
    width: 35vh;
  }
  @media screen and (min-width: 71.875rem) and (max-width: 93.75rem) {
    height: 40vh;
    width: 40vh;
  }
`;
