import './App.css';
import CarDetails from './components/CarDetails';

function App() {

  const cars = [
    {id:1, brand:"Pagani", model:"Zonda R", year:2008, color:"white/black/red", km:0, newCar:true},
    {id:2, brand:"Koegnisseg", model:"Agera R", year:2012, color:"red", km:3000, newCar:false},
    {id:3, brand:"Audi", model:"RS7 ABT-R", year:2023, color:"black", km:0, newCar:true},
  ]

  return (
    <div className="App">
      <h1 className='title'>Escolha seu modelo</h1>
      <div className='car-container'>
     {cars.map((car) => (
      <CarDetails
      key={car.id}
      brand={car.brand}
      model={car.model}
      year={car.year}
      color={car.color}
      km={car.km}
      />
     ))}
     </div>
    </div>
  );
}

export default App;
