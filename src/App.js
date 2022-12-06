import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>{/* A trabajar */}
      <NavBar/>
      <ItemListContainer greeting={"¡Krid Argentina tienda virtual de moda y deporte!"}/>
    </BrowserRouter>
  );
}

export default App;
