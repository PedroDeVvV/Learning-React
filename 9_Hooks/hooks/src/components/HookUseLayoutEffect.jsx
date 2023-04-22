import { useLayoutEffect, useEffect, useState } from "react";

const HookUseLayoutEffect = () => {
  const [name, setName] = useState("Pedro");

  useEffect(() => {

    console.log("2")
    setName("Mudou dnv no useEffect")

  }, []);

  useLayoutEffect(()=> { //nesse caso ele é executado antes do useEffect, independente da ordem
    console.log("2")
    setName("Mudou outra vez")
  },[]) //array dep. vázio só executa uma vez

  console.log(name)
  return (
    <div>
      <h2>useLayoutEffect</h2>
      <p>Nome: {name}</p>
      <hr />
    </div>
  );
};

export default HookUseLayoutEffect;
