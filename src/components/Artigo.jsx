import styled from "styled-components";

const StyledArtigo = styled.article`
  background-color: #c5cfae;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 2px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  @media (min-width: 650px) {
    width: 29%;
    height: 140px;
  }

  h3 {
    color: #9db860;
    border-bottom: solid #9db860 2px;
  }

  p {
    font-size: 1.1rem;
  }
`;
// Definindo props para o componente ficar dinâmico
function Artigo(props) {
  return (
    <StyledArtigo>
      <h3>
        <span>{props.icone}</span> {props.titulo}
      </h3>
      <p> {props.descricao}</p>
      <p>Lançamento: {props.data}</p>
    </StyledArtigo>
  );
}

export default Artigo;
