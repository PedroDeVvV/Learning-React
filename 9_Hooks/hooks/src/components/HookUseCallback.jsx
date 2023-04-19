import { useCallback, useState } from "react";
import List from "./List";

const HookUseCallback = () => {
  const [counter, setCounter] = useState(0);

  const getItemsFromDatabase = useCallback(() => {
    return ["a", "b", "c"];
  }, []);

  return (
    <div>
      <h2>useCallback</h2>
      <List getItems={getItemsFromDatabase}/>
      <button onClick={(()=> setCounter(counter + 1))}>Alterar</button>
      <p>{counter}</p> {/*Quando essa função é executada, ela chama a getItemsFromDatabase*/}
      {/* o que é desnecessário e pode atrapalhar na performance da aplicação, por isso devemos usar o useCallback */}
      {/* com o array de dependências vázio */}
      <hr />
    </div>
  );
};

export default HookUseCallback;
