import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  //4 Rota dinâmica
  const { id } = useParams();

  // 5 - Carregamento de dado individual
  const url = "http://localhost:3000/products/" + id;

  const { data: product, loading, error } = useFetch(url);

  return (
    <>
      <p>ID do produto: {id}</p>
      {error && <p>Ocorreu um erro</p>}
      {loading && <p>Carregando dados...</p>}
      {product && (
        <>
      <h2>{product.name}</h2>
      <p>R${product.price}</p>
      {/* 6- nested routers */}
      <Link to={`products/${product.id}/info`}>Mais informações</Link>
      </>
      )}
    </>
  );
};

export default Product;
