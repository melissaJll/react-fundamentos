import { useEffect, useState } from "react";
import imageloading from "../assets/loading.svg";
import { Link } from "react-router-dom";

function Produtos() {
  // o state "produtos" é iniciado como um array vazio. Posteriormente (após o carregamento de dados da API). ele será preenchidp cos os objetos/produtos.

  const [produtos, setProdutos] = useState([]);

  // State de loading (por padrão inicia ativado)
  const [loading, setLoading] = useState(true);

  // Gerenciando o efeito colateral do carregamento dos dados da API
  // o primeiro parametro é uma função Callback

  // Fluxo geral de funcionamento do código abaixo:
  // 1) useEffect é carregado UMA vez e APÓS a montagem do page (Produtos)
  // obs:o [] indica que o useEffect não tem dependencias adicionais e que será executado somente UMA VEZ
  // 2) Em seguida, ele executa a função carregarDados
  // 3) Ao término dela, atualiza o state (produtos)

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await fetch("https://fakestoreapi.com/products");
        const dados = await resposta.json();
        console.log(dados);
        setProdutos(dados);
        setLoading(false); // quando os produtos carregarem na página paramos o loading
      } catch (error) {
        console.error("Houve um erro: " + error);
      }
    };

    carregarDados();
  }, []);

  //não usamos dados porque é local, como encapsulameto usamos produtos/setProdutos
  //set definiu dados em produtos
  return (
    <article>
      <h2>Produtos</h2>
      {/* true(carregando) = exibe paragrafo */}
      {loading ? (
        <p style={{ textAlign: "center" }}>
          <img src={imageloading} alt="Carregando" />
        </p>
      ) : (
        produtos.map((produto) => {
          return (
            <section key={produto.id}>
              <h3>{produto.title}</h3>
              <p>Preço: {produto.price}</p>
              <p>{produto.description}</p>
              <p>
                <Link to={`/produtos/${produto.id}`}>Ver detalhes</Link>
              </p>
            </section>
          );
        })
      )}
    </article>
  );
}

export default Produtos;
