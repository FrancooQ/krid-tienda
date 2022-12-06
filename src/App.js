import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"¡Krid Argentina tienda virtual de moda y deporte!!"}/>
    </div>
  );
}

export default App;
