import styled from "styled-components";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
  background-color: #5e5e5e;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem;
  
`

export const GenerationSelect = styled.select`
  width: 150px;
  height: 30px;
`