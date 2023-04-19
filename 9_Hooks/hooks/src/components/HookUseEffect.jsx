import { useEffect, useState } from "react";

const HookUseEffect = () => {
  //1- useEffect, sem dependências
  useEffect(() => {
    console.log("estou sendo executado");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 2 - array dep. vazio
  useEffect(() => {
    console.log("array vazio");
  }, []);

  // 3 - item no array de deps.
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Executado apenas quando o another number muda");
    }
  }, [anotherNumber]);

  // 4- Cleanup useEffect
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       console.log("Hello World");
  //       setAnotherNumber( anotherNumber + 1)
  //     }, 2000);
  //     return () => clearTimeout(timer)
  //   }, [anotherNumber]);
  return (
    <div>
      <h2>useEffect</h2>
      <p>{number}</p>
      <button onClick={changeSomething}>Adicionar</button>
      <p>Another number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Adicionar anotherNumber
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
