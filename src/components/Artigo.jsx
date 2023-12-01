import styled from "styled-components";

const StyledArtigo = styled.article`
  background-color: #c5cfae;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  @media (min-width: 650px) {
    width: 27%;
    height: 140px;
  }

  h3 {
    background-color: #e6e6bc;
    border-bottom: solid #9db860 3px;
  }

  p {
    font-size: 1.1rem;
  }
`;

function Artigo() {
  return (
    <StyledArtigo>
      <h3>Artigo 1</h3>
      <p> conteúdo do artigo 1...</p>
    </StyledArtigo>
  );
}

export default Artigo;
