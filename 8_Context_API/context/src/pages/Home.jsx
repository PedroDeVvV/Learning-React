// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";
import ChangeCounter from "../components/ChangeCounter";

//5- context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  //5- context mais complexo
  const { color, dispatch } = useTitleColorContext();

  //6 - alterando state complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - alterando o valor do contexto */}
      <ChangeCounter />
      {/* 6- alterando contexto */}
      <button onClick={(() => setTitleColor('BLUE'))}> Azul</button>
      <button onClick={(() => setTitleColor('RED'))}> Vermelho</button>
    </div>
  );
};

export default Home;
