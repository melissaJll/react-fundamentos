import Menu from "./Menu";
//Importando o módulo css como um objeto chamado estilo
//E para colocar a classe no span fazemos da mesma forma que um objeto
import estilos from "./Cabecalho.module.css";

function Cabecalho() {
  return (
    <header>
      <h1>
        <span className={estilos["destaque-texto"]}>Olá</span>
        <span className={estilos.sombra}> React</span> 😊
      </h1>
      <Menu />
      <hr />
    </header>
  );
}

export default Cabecalho;
