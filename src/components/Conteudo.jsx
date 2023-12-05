import styled from "styled-components";
import Artigo from "./Artigo";

// Importando os assets de imagem
import imagem1 from "../assets/abra-o-livro.png";
import imagem2 from "../assets/livro-magico.png";
import imagem3 from "../assets/pilha-de-livros.png";

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
  const datas = ["23-05-2019", "17-04-2020", "30-03-2013"]; //array datas[0]
  //objeto datas.dia

  return (
    <StyledConteudo>
      <section>
        <h2>Conteúdo da aplicação</h2>
        {/* <img
          src="https://www.facev.org.br/wp-content/uploads/2021/10/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK.png"
          alt=""
        /> height=100px*/}
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          iure facere vitae impedit. Sequi. Lorem ipsum dolor sit amet <br />
          consectetur, adipisicing elit. Rerum ullam qui fuga sit neque? Dicta
          repellendus fuga nihil consectetur, animi porro a molestias!
        </p>

        <div className="artigos">
          {/* Props*/}
          <Artigo
            data={datas[0]}
            icone="✔"
            titulo="Senhor dos Anéis"
            descricao="Livro criado por Tolkien"
            imagem={imagem1}
          >
            <h4>Volumes</h4>
            <ul>
              <li>A Sociedade do anél</li>
              <li>As Duas Torres</li>
              <li>O Retorno do Rei</li>
            </ul>
          </Artigo>

          <Artigo
            data={datas[1]}
            icone="✔"
            titulo="Game of Thrones"
            descricao="Ficção e morte"
            imagem={imagem2}
          >
            <h4>Defuntos no Livro</h4>
            <ol>
              <li>Um cara</li>
              <li>Outro cara</li>
              <li>Todos</li>
            </ol>
          </Artigo>

          <Artigo
            data={datas[2]}
            icone="✔"
            titulo="HTML5 & CSS3"
            descricao="Fonte de estudo front-end"
            imagem={imagem3}
          >
            <h4>Assuntos</h4>
            <details>
              <summary>Abra</summary>
              Teste Lorem ipsum dolor sit amet consectetur adipisicing.
            </details>
          </Artigo>
        </div>
      </section>
    </StyledConteudo>
  );
}
export default Conteudo;
