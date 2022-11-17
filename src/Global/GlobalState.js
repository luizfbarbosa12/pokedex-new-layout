import React, {useState, useEffect} from 'react'
import { GlobalContext } from './GlobalContext'
import axios from 'axios'

const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([])

    const getAllPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30`)
        .then((res) => {
            setPokemons(res.data.results)
        }).catch((err) => {
            console.log(err)
        })
    }

    const requests = {getAllPokemon}
    const states = {pokemons}

    const data = {requests, states}

  return (
        <GlobalContext.Provider value={data}>
            {props.children}
        </GlobalContext.Provider>
  )
}

export default GlobalState