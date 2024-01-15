import { useState } from "react";

function Produtos() {
  // o state "produtos" é iniciado como um array vazio. Posteriormente (após o carregamento de dados da API). ele será preenchidp cos os objetos/produtos.

  const [produtos, setProdutos] = useState([]);

  const carregarDados = async () => {
    try {
      const resposta = await fetch("https://fakestoreapi.com/products");
      const dados = await resposta.json();
      console.log(dados);
    } catch (error) {
      console.error("Houve um erro: " + error);
    }
  };

  carregarDados();

  return <h2>Produtos</h2>;
}

export default Produtos;
