import { useEffect } from "react";
import { useParams } from "react-router-dom";

function DetalhesProduto() {
  // Usamos o hook useParams do react router DOM para ter acesso aos parametros da rota dinâmica neste caso, o parametro chamdado "id".
  const { id } = useParams();

  useEffect(() => {}, [id]);

  return (
    <article>
      <h2>Titulo </h2>
      <p>Descrição </p>
      <p>
        <b>Categoria:</b>
      </p>

      <p>
        <b>Preço:</b>
      </p>

      <img src="" alt="" />
    </article>
  );
}

export default DetalhesProduto;
