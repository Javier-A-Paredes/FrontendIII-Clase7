import React, { useState } from 'react'

function Contador() {
    const [count, setCount] = useState(1)
    
    let resultado;
    const comparacion = (num) => (num > 0 && num <= 50)
    
    const sumar = () => {   
        resultado = count + 1        
        if(comparacion(resultado)){
            setCount(resultado)       
        }        
    }
    const restar = () => {
        resultado = count - 1
        if(comparacion(resultado)){
        setCount(resultado)
        }
    }
    const multiplicar = () => {
        resultado = count * 2
        if(comparacion(resultado)){
        setCount(resultado)
        }
    }
    const dividir = () => {
        resultado = count / 2
        if(comparacion(resultado)){
        setCount(resultado)
        }
    }
    
  return (
    <div>
        <h1>{count}</h1>
        
        <button onClick={sumar}>SUMAR</button>
        <button onClick={restar}>RESTAR</button>
        <button onClick={multiplicar}>MULTIPLICAR</button>
        <button onClick={dividir}>DIVIDIR</button>
    </div>
  )
}

export default Contador