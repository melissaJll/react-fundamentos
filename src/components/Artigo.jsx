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
  }

  h3 {
    color: #9db860;
    border-bottom: solid #9db860 2px;
  }

  p {
    font-size: 1.1rem;
  }
  .centralizar {
    text-align: center;
  }
`;
// Definindo props para o componente ficar dinâmico
// (props) = {imagem, icone ...} desestruturando o props e agota tem acesso direto
function Artigo({ imagem, icone, titulo, data, descricao, children }) {
  return (
    <StyledArtigo>
      <p className="centralizar">
        <img src={imagem}></img>
      </p>

      <h3>
        <span>{icone}</span> {titulo}
      </h3>

      <p> {descricao}</p>

      <p>Lançamento: {data}</p>

      {children}
    </StyledArtigo>
  );
}

export default Artigo;
