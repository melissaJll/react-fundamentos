import Artigo from "../Artigo";
import estilos from "./Cabecalho.module.css";

function Conteudo() {
  return (
    <main className="fundo-verde">
      <section>
        <h2 className={`${estilos.fundoBranco} centralizar`}>
          Conteúdo da aplicação
        </h2>
        <p className="centralizar separar">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          iure facere vitae impedit. Sequi. Lorem ipsum dolor sit amet <br />
          consectetur, adipisicing elit. Rerum ullam qui fuga sit neque? Dicta
          repellendus fuga nihil consectetur, animi porro a molestias!
        </p>

        <Artigo />
        <Artigo />
        <Artigo />
      </section>
    </main>
  );
}
export default Conteudo;
