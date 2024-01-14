import { useState } from "react";
import styled from "styled-components";
import Artigo from "./Artigo";
import cursos from "../api/cursos";

function Conteudo() {
  /* Criando um gerenciador de state para mudança/filtro
  de categorias. Inicialmente, começa como null pois ainda não
  temos uma escolha/seleção de categoria (aparece tudo) */
  const [categoria, setCategoria] = useState(null);

  // const aplicarFiltro2 = (event) => {
  //   console.log(event.currentTarget.innerText);
  // categoria do botão é comparado com curso.categoria - e set categoria
  // };
  const aplicarFiltro = (event) => {
    // Capturamos (após o clique) o texto escrito em cada botão
    const categoriaEscolhida = event.currentTarget.innerText;

    // E em seguida passamos este texto para o state de categoria
    setCategoria(categoriaEscolhida);
  };

  const limparFiltro = () => {
    setCategoria(null);
  };

    /* Gerando um novo array de cursos filtrados */
    const cursosFiltrados = cursos.filter((curso) => {
      /* Se o state categoria for igual a uma 
      das categorias dos cursos, então será retornada
      a lista de cursos daquela categoria. Senão, será 
      retornada lista completa devido ao state ser null (ou seja,
      não há uma categoria para filtrar) */
      return curso.categoria === categoria || categoria === null;
    });
    
  return (
    <StyledConteudo>
      <h2 className="centralizar">Conteúdo da aplicação</h2>

      <p className="centralizar">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        labore? Officia quae quo a quas excepturi distinctio sint voluptas
        labore iste veniam possimus facere adipisci sit repellat, voluptate,
        expedita aspernatur.
      </p>

      <div className="filtros">
        <p>
          <b>Filtrar por: </b>
          <button onClick={aplicarFiltro}>Front-end</button>
          <button onClick={aplicarFiltro}>Back-end</button>
          <button onClick={aplicarFiltro}>Design</button>
          <button onClick={aplicarFiltro}>Mobile</button>
          <button onClick={aplicarFiltro}>Música</button>
          <button onClick={aplicarFiltro}>Gastronomia</button>

        {/*Renderização condicional se uma categoria for seleconada */}
          {categoria && (
            <button onClick={limparFiltro}>🧹 Limpar filtro</button>
          )}

        </p>

        {/* Renderização Condicional
        O texto/tag/componente somente será renderizado/exibido
        se o state categoria existir (ou seja, não é
        null, undefined, false) */}

        {categoria && (
          <p>
            Você escolheu: <b>{categoria}</b>
          </p>
        )}
      </div>

      <div className="artigos">
        {cursosFiltrados.map((curso) => (
          <Artigo
            key={curso.id}
            categoria={curso.categoria}
            titulo={curso.titulo}
            preco={curso.preco}
          />
        ))}
      </div>
      
    </StyledConteudo>
  );
}

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
  .filtros {
    margin: 1rem 0;
    padding: 1rem 0;
    border-top: solid 2px;
    border-bottom: solid 2px;
  }

  .filtros button {
    margin: 0.5rem;
    font-size: 1.1rem;
  }

    @media screen and (min-width: 650px) {
    .artigos {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      & article {
        width: 48%;
        margin: 1%;
      }
    }
  }
`;

export default Conteudo;
