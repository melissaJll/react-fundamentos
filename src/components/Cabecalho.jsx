import Menu from "./Menu";
// Impportação da lib styled components
import styled from "styled-components";

//Especifica que será dentro do header``
const StyledCabecalho = styled.header`
  //header{
  background-color: #f3b2bd;
  color: white;
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
  return (
    <StyledCabecalho>
      <h1>Olá React 😊</h1>
      <hr />
      <Menu />
    </StyledCabecalho>
  );
}

export default Cabecalho;
