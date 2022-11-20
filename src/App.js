import {useState} from 'react'
import { GlobalStyle } from "./GlobalStyles/GlobalStyle";
import GlobalState from "./Global/GlobalState";
import Router from './Router/Router';

function App() {

  
  return (
    <GlobalState>
      <GlobalStyle />
      <Router/>
    </GlobalState>
  );
}

export default App;
