import styled from "styled-components";
import Artigo from "./Artigo";

const StyledConteudo = styled.main`
  width: 90vw;
  margin: 1rem auto;
  background-color: #f3f3ed;
  padding: 1rem;
  box-shadow: #085508 0px 0px 1px inset;

  h2,
  p {
    padding: 0.2rem 0;
  }
  .artigos {
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 650px) {
      flex-direction: column;
    }
  }
`;

function Conteudo() {
  return (
    <StyledConteudo>
      <section>
        <h2>Conteúdo da aplicação</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          iure facere vitae impedit. Sequi. Lorem ipsum dolor sit amet <br />
          consectetur, adipisicing elit. Rerum ullam qui fuga sit neque? Dicta
          repellendus fuga nihil consectetur, animi porro a molestias!
        </p>
        <div className="artigos">
          <Artigo />
          <Artigo />
          <Artigo />
        </div>
      </section>
    </StyledConteudo>
  );
}
export default Conteudo;
