import React from 'react';


const nombre ="Carlos";
const pais = "colombia";
const amigos = ['jorge','luis','mauricio','dds','ffdsfg','ggd'];
const color="#444444";
const Usuario = ()=>{
    return(
      <div>
        <h1>has iniciado sesion</h1>
        <h1 className="nueva" style={{color:color}}>Hola {nombre+" "+(2+2)}</h1>
        <p>hola mundo</p>
        {pais && <p>tu esres de que pais {pais}</p>}
        <ul>
          {amigos.map((amigo,index)=> <li key={index}>{amigo}</li> )}
        </ul>
      </div>
    );
  };
  export default Usuario;