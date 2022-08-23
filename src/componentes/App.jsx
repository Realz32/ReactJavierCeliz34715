import React from "react";
import { useState } from "react";
import './App.css';
import Navbar from "./Navbar/Navbar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import {BiCart} from 'react-icons/bi';



function App() {

  const [cont, setCont] = useState(0);


  return (
  
    <>
      <Navbar />
    
      <ItemListContainer/>
      
      <BiCart className="cart"/>
      
    
    
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
