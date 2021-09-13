import React from 'react';
import ReactDOM from 'react-dom';
import {TituloRojo,TituloAzul} from './componentes/titulo';
  

const sesion= true;
const pais = "colombia";
const amigos = ['jorge','luis','mauricio','dds','ffdsfg','ggd'];

const Usuario = ()=>{
  return(
    <div>
      <h1>has iniciado sesion</h1>
      <TituloRojo usuario="Jorge"/>
      <TituloAzul usuario="rolando"/>
      
      <p>hola mundo</p>
      {pais && <p>tu esres de {pais}</p>}
      <ul>
        {amigos.map((amigo,index)=> <li key={index}>{amigo}</li> )}
      </ul>
    </div>
  );
};
const App = ()=>{
  return( 
  <>
    {sesion=== true ?  <div> <Usuario/> <Usuario/> </div>: <h1>No has iniciado sesion</h1>}
  </>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'));
