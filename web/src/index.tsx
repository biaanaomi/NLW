//primeiro arquivo a ser carregado na aplicação index.tsx
//DOM é arvores de elementos do HTML (integração REACDOM)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//metodo render recebe tags HTML ou componentes e colocar dentro do HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
