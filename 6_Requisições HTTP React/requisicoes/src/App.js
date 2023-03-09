import "./App.css";

import { useState, useEffect } from "react";

// 4 - custom hook
import { useFetch } from "./hooks/useFetch";

// 8 - errar url para mostrar erro
// "http://localhost:3001/products"
const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // 4 - custom hook e 5 - refactor post
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //1- resgatando dados
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const res = await fetch(url); //resposta da reaquisição

  //     const data = await res.json(); //convertendo a resposta em objeto

  //     setProducts(data); //passando o valor para a variavel products
  //   };

  //   fetchProducts(); //executando a requisição
  // }, []);

  //2- Adição de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    //   const res = await fetch(url, {
    //     //estamos enviando mais informações ao json server
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "Application/json",
    //     },
    //     body: JSON.stringify(product),
    //   });
    //   // 3 - carregamento dinâmico
    //   const addedProducts = await res.json(); //pega o ultimo produto adicionado

    //   setProducts((prevProducts) => [...prevProducts, addedProducts]); //passa como valor o estado anterior, copiando todo o array + o ultimo produto
    //   //sendo possivel vizualizar a mudança em tempo real, lembrando que products é um array de objs

    //5 - Refatorando o post
    httpConfig(product, "POST");

    setName("");
    setPrice(""); //ao termino da execução, o valor de price e name são zerados.
  };

  /* 9 - desafio */
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6 - state de loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - R$: {product.price}
              {/* 9 - desafio */}
              <button onClick={() => handleRemove(product.id)}>Excluir</button>
            </li>
          ))}
      </ul>

      <div className="add-product">
        <p>Adicionar produto:</p>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* 7 - state de loading no post */}
          {loading ? <p>Aguarde!</p> : <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
