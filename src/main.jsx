// Importação apenas das libs essenciais (React e ReactDOM)
import React from 'react'
import ReactDOM from 'react-dom/client'

//Importação do primeiro e principal componente, arquivo em que carregamos os elementos da página (como se fosse index/home)
import App from './App.jsx'

//Inicialização dos recursos do react manipulando a div#root existente no index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
