const Challenge = () => {
  let a = 1;
  let b = 2;

  return (
    <div>
      <p>este é o valor de {a}</p>
      <p>este é o valor de {b}</p>
      <button onClick={() => alert(a + b)}>Clique para somar</button>
    </div>
  );
};

export default Challenge;
