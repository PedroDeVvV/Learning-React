import React from "react";

const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
      <h2>Detalhes do Carro</h2>
      <ul>
        <li> Marca: {brand} </li>
        <li>Quilomêtragem: {km}km </li>
        <li>Cor: {color}</li>
      </ul>
      {newCar && <p>Esse carro é 0Km</p>}
    </div>
  )
}

export default CarDetails;
