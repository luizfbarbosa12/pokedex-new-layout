import styled from "styled-components";

export const CardsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(27.5rem, 1fr));
  justify-items: center;
  background-color: #5e5e5e;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem;

  @media screen and (min-width: 400px) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
`

export const GenerationSelect = styled.select`
  width: 9.375rem;
  height: 1.875rem;
  font-size: 18px;
`

export const SearchInput = styled.input`
font-size: 18px;
`