import React, { useState } from 'react'

function ArrayProductos() {
    const [productos, setProductos] = useState([
        {
            nombre: "tomate",
            precio: 340,            
        },
        {
            nombre: "cereales",
            precio: 275
        },
        {
            nombre: "arroz",
            precio: 120
        },
        {
            nombre: "pepitos",
            precio: 200 
        },
        {
            nombre: "pala",
            precio: 4500
    }])
   
    
          
    const borrarProducto = (index) => {
        console.log(index)
        const listaProductos = productos.filter((producto, i) => i !== index);
        setProductos(listaProductos);
    };
            
          

  return (
    <div>
        <ul>
            {productos.map( (producto, index) =>(            
            <li key={index}>
                <p>{producto.nombre}: ${producto.precio}</p>
                <button onClick={()=> borrarProducto(index)} >eliminar producto</button>
            </li>            
    ))}
        </ul>        
    </div>
  )
}

export default ArrayProductos