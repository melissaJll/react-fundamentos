import styled from "styled-components";

// Definindo props para o componente ficar dinâmico
// (props) = {imagem, icone ...} desestruturando o props e agota tem acesso direto
function Artigo({ titulo, categoria, preco, id, hadleClick }) {
  function formataReal(valor) {
    return valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }
  return (
    <StyledArtigo>
      {/* O componente filho(artigo) recebe através da prop hadleClick a referencia à função exemplo3 existente no componente pai(conteudo) */}
      <h3 onClick={hadleClick}>
        <span>{categoria}</span>
      </h3>

      <p>
        <b>Curso:</b> {titulo}
      </p>

      <p>
        <b>Preço:</b> {formataReal(preco)}
      </p>
    </StyledArtigo>
  );
}

const StyledArtigo = styled.article`
  background-color: #c5cfae;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 2px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  @media (min-width: 650px) {
    //0 650
    width: 35%;
    flex-wrap: wrap;
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

export default Artigo;
