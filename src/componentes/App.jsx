import React from "react";
import { useState } from "react";
import './App.css';
import Navbar from "./Navbar/Navbar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import CartWidget from "./CartWidget/CartWidget";



function App() {

  const [cont, setCont] = useState(0);


  return (
  
    <>
      <Navbar />
    
      <ItemListContainer/>
      
    
      
    
    
    </>
    /*<p>
      Contador: {cont}
    </p>
    <button className='btn btn-primary' onClick={() => setCont(Cont + 1)}>
      +
    </button>
    <button className='btn btn-secondary' onClick={() => setCont(Cont - 1)}>
      -
    </button>;*/
    
  )
}

export default App;
