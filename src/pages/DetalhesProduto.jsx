import { useParams } from "react-router-dom";

function DetalhesProduto() {
  const { id } = useParams();
  console.log(id);

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
