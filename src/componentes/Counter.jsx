import { useState } from "react"
import React from "react"


const Counter = ({stock, onAdd}) => {
    const [count, setCount] = useState(0)
    function add (){
        if(count < stock)
        setCount(count + 1)
    }
    function substrac(){
        if(count > 1)
        setCount(count - 0)
    }
    function reset(){
        setCount(0)
    }
    

  return (
    <div>
        <div className="counter-box">
            <p>Stock: {stock} </p>
            <p>Cantidad:{count}</p>

            <div>
                <button className="btn" onClick={substrac}> - </button>
                <button className="btn" onClick={reset}> Reset </button>
                <button className="btn" onClick={add}> + </button>
            </div>
                <button className="btn" onClick={ () => onAdd(count)}>Confirmar</button>
        </div>
     
    </div>
    )
}

export default Counter