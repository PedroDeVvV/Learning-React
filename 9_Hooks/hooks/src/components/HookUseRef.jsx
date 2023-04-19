import { useRef, useEffect, useState } from "react";

const HookUseRef = () => {
  // 1 - useRef
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
    //Não é re-renderizado, o que torna possivel essa contagem
  });

  //2 - useRef e DOM
  const inputRef = useRef();
  const [text,setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    setText("")

    inputRef.current.focus();
  }

  return (
    <div>
      <h2>useRef</h2>
      <p>O componente renderizou: {numberRef.current} vezes</p>
      <p>Counter A: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Adicionar</button>
      <p>Counter B: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>Adicionar</button>
      {/* 2 - useRef e DOM */}
      <hr />
      <h4>useRef e DOM</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} value={text} onChange={((e) => setText(e.target.value))}/>
        <input type="submit" value="Enviar" />
      </form>
      <hr/>
    </div>
  );
};

export default HookUseRef;
