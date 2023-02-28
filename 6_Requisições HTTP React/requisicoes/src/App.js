import "./App.css";
import { useState, useEffect } from "react";
//4- custom hook
import { useFetch } from "./hooks/useFetch";
const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([])

//4 custom
const {data: items} = useFetch(url);
// console.log(data)

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
    //função que será executada no submit do forms
    e.preventDefault();

    const product = {
      //criará um obj
      name,
      price,
    };

    const res = await fetch(url, {
      //estamos enviando mais informações ao json server
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(product),
    });
    // 3 - carregamento dinâmico
    const addedProducts = await res.json(); //pega o ultimo produto adicionado

    setProducts((prevProducts) => [...prevProducts, addedProducts]); //passa como valor o estado anterior, copiando todo o array + o ultimo produto
    //sendo possivel vizualizar a mudança em tempo real, lembrando que products é um array de objs
    setPrice("")
    setName("") //ao termino da execução, o valor de price e name são zerados.
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R${product.price}
          </li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            ></input>
            <input type="submit" value="Criar"></input>
          </label>
        </form>
      </div>
    </div>
  );
}

export default App;
