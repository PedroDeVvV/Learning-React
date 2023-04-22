import { useMemo, useState, useEffect } from "react";

const HookUseMemo = () => {
  const [number, setNumber] = useState(0);
  //   const premiumNumbers = ["0", "100", "200", "300", "400"];
  const premiumNumbers = useMemo(() => {
    return ["0", "100", "200", "300", "400"]; //essa referência de valor ficará salva sempre
    //não tendo necessidade do componente sempre renderizar
  }, []);

  useEffect(() => {
    console.log("Premium Number alterado");
  }, [premiumNumbers]);

  return (
    <div>
      <h2>useMemo</h2>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      {premiumNumbers.includes(number) ? <p>Acertou o número</p> : ""}
      <hr />
    </div>
  );
};

export default HookUseMemo;
