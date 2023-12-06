import { useState } from "react";
import Menu from "./Menu";
// Impportação da lib styled components
import styled from "styled-components";

//Especifica que será dentro do header``
const StyledCabecalho = styled.header`
  //header{
  background-color: #bbd6b4;
  color: #fcf6f6;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  hr {
    background-color: #7a4ca5;
    width: 50%;
    border: none;
    height: 4px;
    margin: 8px auto;
  }
`;

function Cabecalho() {
  // Usando gerenciador de states, aqui definimos a chamada de uma função especial do React: "useState".Está e outras funções iniciadas com o prefixo 'use' são conhecidas como React Hooks
  // No caso do useState usando desestruturação [] criamos uma variavel que representa o valor do state (titulo) e uma função responsável por atualizar o state(setTitulo);

  //const [desestruturação] = valor padrão?
  const [titulo, setTitulo] = useState("Olá React 😊");

  const mudarTitulo = () => {
    // Alterando o valor do state 'titulo' através do setTitulo quando ocorre o evento de clique no h1.
    setTitulo("Oie 😃");
  };

  return (
    <StyledCabecalho>
      <h1 onClick={mudarTitulo}>{titulo}</h1>
      <hr />
      <Menu />
    </StyledCabecalho>
  );
}

export default Cabecalho;
