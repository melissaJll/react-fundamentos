import styled from "styled-components";

const StyledMenu = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  //hover aninhado
  a {
    text-decoration: none;
    color: #fcf6f6;
    height: 40px;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 100ms;

    &:hover {
      background-color: #a575cc;
      color: #3b2d2d;
    }
  }
`;

function Menu() {
  return (
    <StyledMenu>
      <a href="">Home</a>
      <a href="">Produtos</a>
      <a href="">Contatos</a>
    </StyledMenu>
  );
}

export default Menu;
