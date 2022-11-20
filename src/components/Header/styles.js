import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    gap: 16px;
    padding: 16px;
    align-items: center;
    justify-content: space-around;
`

export const PokedexButton = styled.button`
    width: 287px;
    background-color: #33A4F5;
    border: none;
    cursor: pointer;
    border-radius: 0.5rem;
    height: 74px;
    font-size: 24px;
    color: white;
    font-weight: 700;
`
export const AllPokemon = styled.div`
    text-decoration: underline;
    cursor: pointer;
    font-weight: bold;
`

export const RemoveFromPokedex = styled(PokedexButton)`
    background-color: #FF6262;
`