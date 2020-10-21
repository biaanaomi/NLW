import React from 'react';

//jsx-> Javascript XML possibilita html dentro do js
//class palavra reservada para criar classe
//App é um componente função que retorna conteudo HTML/JSX
//Componente sempre tem letra maiuscula function Title{}
//propriedades = atributos em HTML 

import './styles/global.css';
import 'leaflet/dist/leaflet.css';

import Routes from './routes';

//{logoImg} coloca variavel no lugar da html 
function App() {
  return (
    <Routes />
  );
}

export default App;
