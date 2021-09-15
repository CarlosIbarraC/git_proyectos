import React from 'react';
import ReactDOM from 'react-dom';
import  Usuario  from "./componentes/Usuario"; 

const sesion= true;


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