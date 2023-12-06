import styled from "styled-components";
import Artigo from "./Artigo";
import cursos from "../api/cursos";
// console.log(cursos); teste

// Importando os assets de imagem
import imagem1 from "../assets/abra-o-livro.png";
import imagem2 from "../assets/livro-magico.png";
import imagem3 from "../assets/pilha-de-livros.png";

const StyledConteudo = styled.main`
  width: 83vw;
  margin: 1rem auto;
  background-color: #f3f3ed;
  padding: 1rem;
  box-shadow: #085508 0px 0px 1px inset;

  h2,
  p {
    padding: 0.2rem 0;
  }
  .centralizar {
    text-align: center;
  }
  .artigos {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    @media (max-width: 650px) {
      flex-direction: column;
    }
  }
`;

function Conteudo() {
  return (
    <StyledConteudo>
      <section>
        <h2 className="centralizar">Conteúdo da aplicação</h2>

        <p className="centralizar">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          iure facere vitae impedit. Sequi. Lorem ipsum dolor sit amet <br />
          consectetur, adipisicing elit. Rerum ullam qui fuga sit neque? Dicta
          repellendus fuga nihil consectetur, animi porro a molestias!
        </p>

        <div className="artigos">
          {cursos.map((curso) => (
            // e return um artigo
            <Artigo
              key={curso.id}
              titulo={curso.titulo}
              categoria={curso.categoria}
              preco={curso.preco}
            ></Artigo>
          ))}
        </div>
      </section>
    </StyledConteudo>
  );
}
export default Conteudo;
