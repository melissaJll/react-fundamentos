import styled from "styled-components";

const StyledMenu = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a {
    text-decoration: none;
    color: white;
    padding: 7px;
  }
  a:hover {
    background-color: #cc75be;
    color: #3b2d2d;
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
