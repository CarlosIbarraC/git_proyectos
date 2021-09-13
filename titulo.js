import React from 'react';


const TituloRojo = ({usuario}) => {
    const color="#444444";
    
    return (<h1 className="nueva" style={{color:color}}>Hola {usuario}{' '+(2+2)}</h1> );
}
const TituloAzul = (props) => {
    const azul="#676767"
    const nombre =props.usuario;
    return (<h1 className="nueva" style={{color:azul}}>Hola {nombre+" "+(2+2)}</h1> );
}
 
export {TituloRojo,TituloAzul} ;
/* peueba      mbmb*/