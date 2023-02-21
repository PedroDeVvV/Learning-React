import "./App.css";
import Zonda from "./assets/zonda.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import { useState } from "react";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
  // const name = "Pedro";
  const [userName] = useState("Henrique");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Vermelho", newCar: true, km: 0 },
    { id: 2, brand: "Audi", color: "Cinza", newCar: true, km: 0 },
    { id: 3, brand: "Lotus", color: "Amarelo", newCar: false, km: 330 },
    { id: 4, brand: "Masserati", color: "Azul escuro", newCar: true, km: 0 },
    { id: 5, brand: "Aston Martin",color: "Verde Esmeralda",newCar: false, km: 800},
    { id: 6, brand: "Bugatti", color: "Azul", newCar: true, km: 0 },
  ];

  function showMessage() {
    console.log("Evento do componente pai !");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const pessoas = [
    { id: 1, name: "Pedro", age: 18, job: "Web Developer"},
    { id: 2, name: "Henrique", age: 17, job: "Jovem Aprendiz" },
    { id: 3, name: "Diego", age: 22, job: "Engenheiro"},
    { id: 4, name: "Felipe", age: 15, job: "Estudante" },
  ];

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* imagem em public */}
      <div>
        <img src="/rs7.jpg" alt="Audi RS7-ABT" />
      </div>
      {/* imagem sem asset */}
      <hr />
      <div>
        <img src={Zonda} alt="Zonda R" />
      </div>
      <ManageData />
      <hr />
      <ListRender />
      <hr />
      <ConditionalRender />
      <hr />
      {/* props */}
      <ShowUserName name={userName} />
      <hr />
      {/* Esse componente tem acesso a uma prop name com o valor de Pedro */}
      {/* destructuring */}
      <CarDetails brand="Audi" km={2500} color="Nardo Grey" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Koegnisseg" km={0} color="Azul marfim" newCar={true} />
      <CarDetails
        brand="Nissan"
        km={3030}
        color="Branco perolado"
        newCar={false}
      />
      <hr />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
      <hr />
      {/* Fragments */}
      <Fragment propFragment="teste" />
      <hr />
      {/* Children */}
      <Container myValue="Teste">
        <p>Esse é o conteúdo</p>
      </Container>
      <Container myValue="Teste 2">
        <h5>Testando o container</h5>
      </Container>
      <hr />
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />
      <hr />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} /><hr/>
     {/* Loop */}
     {pessoas.map((pessoa)=> (
      <UserDetails 
      key={pessoa.id}
      name={pessoa.name}
      age={pessoa.age}
      job={pessoa.job}
      />
     ))}
    </div>
  );
}

export default App;
