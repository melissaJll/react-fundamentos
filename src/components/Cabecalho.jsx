import Menu from "./Menu";
import "./cabecalho.css";

function Cabecalho() {
  return (
    <header>
      <h1>
        Olá <span className="sombra">React</span> 😊
      </h1>
      <Menu />
      <hr />
    </header>
  );
}

export default Cabecalho;
