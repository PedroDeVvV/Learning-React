import axios from "axios";
import { useState, useEffect } from "react";

const About = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => setDados(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      Página Sobre,feita usando requisição axios
      <ul className="products">
        {dados.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$ {item.price}</p>
            {/* 4 - rota dinamica */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
