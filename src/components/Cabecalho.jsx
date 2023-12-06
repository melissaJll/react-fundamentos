import Menu from "./Menu";

import styled from "styled-components";

function Cabecalho() {
  return (
    <StyledCabecalho>
      <h1 onClick={() => alert("Exemplo 1")}>Olá React 😊</h1>
      <hr />
      <Menu />
    </StyledCabecalho>
  );
}

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

export default Cabecalho;
