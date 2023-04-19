import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let userName = "Pedro";

  const [name, setName] = useState("Henrique");

  const changeName = () => {
    userName = "Roberto";

    setName("Leana");
  };

  // 2 - useState e input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    //envio
    console.log(age);
  };

  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeName}>Alterar nome</button>

      {/* 2- useState e input */}
      <p>Digite a sua idade</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </form>
      <p>Você tem {age} anos.</p>
      <button onClick={handleSubmit}>Enviar</button>
      <hr />
    </div>
  );
};

export default HookUseState;
