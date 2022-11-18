import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import DetailsPage from "../pages/Details/DetailsPage";
import Pokedex from '../pages/Pokedex/Pokedex'
import Header from '../components/Header/Header';

const Router = () => {
  return (
    <BrowserRouter>
    <Header
      // setCurrentPage={props.setCurrentPage}
      //   idFilter={idFilter}
      //   setIdFilter={setIdFilter}
      //   pesquisa={pesquisa}
      //   setPesquisa={setPesquisa}
      //   typeFilter={typeFilter}
      //   setTypeFilter={setTypeFilter}
      //   order={order}
      //   setOrder={setOrder}
      />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/details/:pokemonName" element={<DetailsPage />} />
          <Route path="/pokedex" element={<Pokedex />} />
        </Routes>
      </BrowserRouter>
  )
}

export default Router