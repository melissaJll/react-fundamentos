import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetalhesProduto() {
  // Usamos o hook useParams do react router DOM para ter acesso aos parametros da rota dinâmica neste caso, o parametro chamdado "id".
  const { id } = useParams();

  const [produto, setProduto] = useState([]);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await fetch(`https://fakestoreapi.com/products/${id}`);
        const dados = await resposta.json();
        console.log(dados);
        setProduto(dados);
      } catch (error) {
        console.error("Erro ao carregar produto: " + error);
      }
    };

    carregarDados();
  }, [id]);

  return (
    <article>
      <h2>{produto.title} </h2>
      <p>{produto.description}</p>
      <p>
        <b>Categoria: {produto.category}</b>
      </p>

      <p>
        <b>Preço: {produto.price}</b>
      </p>

      <img src="" alt="" />
    </article>
  );
}

export default DetalhesProduto;
