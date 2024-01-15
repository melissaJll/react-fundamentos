import { useEffect, useState } from "react";

function Produtos() {
  // o state "produtos" é iniciado como um array vazio. Posteriormente (após o carregamento de dados da API). ele será preenchidp cos os objetos/produtos.

  const [produtos, setProdutos] = useState([]);

  // Gerenciando o efeito colateral do carregamento dos dados da API
  // o primeiro parametro é uma função Callback
  useEffect(() => {
    // carrega uma vez como efeito da renderização da página
    const carregarDados = async () => {
      try {
        const resposta = await fetch("https://fakestoreapi.com/products");
        const dados = await resposta.json();
        console.log(dados);
        setProdutos(dados);
      } catch (error) {
        console.error("Houve um erro: " + error);
      }
    };

    carregarDados();
  }, []);
  //, segundo parametro lista

  return <h2>Produtos</h2>;
}

export default Produtos;
