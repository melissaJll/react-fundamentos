import Menu from "./Menu";
// Impportação da lib styled components
import styled from "styled-components";

const StyledCabecalho = styled.header`
  background-color: blue;
  color: white;
`;

function Cabecalho() {
  return (
    <header>
      <h1>Olá React 😊</h1>
      <Menu />
      <hr />
    </header>
  );
}

export default Cabecalho;
