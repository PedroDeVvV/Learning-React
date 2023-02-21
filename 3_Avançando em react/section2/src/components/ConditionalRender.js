import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);

  const [name, setName] = useState("Henrique");

  return (
    <div>
      <h1>isso será exibido ?</h1>
      {x && <p>Se x for true, sim !</p>}
      {!x && <p>Agora é falso!</p>}

{/* If ternário */}
      <h1> If ternário</h1>
      {name === "Pedro" ? (
        <div>
          <p>O nome é {name}</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado, apenas o nome "{name}"</p>
        </div>
      )}
      <button onClick={() => setName("Pedro")}>Clica aqui!</button>
      <br />
      <button onClick={() => setName("Henrique")}>Alterar!</button>
    </div>
  );
};

export default ConditionalRender;
