import styles from "./CarDetails.module.css";
import React from "react";

const CarDetails = ({ brand, model, color, km, year, newCar }) => {
  return (
    <div className={styles.card}>
      <h1>Detalhes do Carro</h1>
      <ul>
        <li>Marca: {brand}</li>
        <li>Modelo: {model}</li>
        <li>Cor: {color}</li>
        <li>Ano: {year}</li>
        <li>Quilometragem: {km} km's</li>
      </ul>
      {km === 0 ? (
        <div>
          <p>Carro 0Km, novo!</p>
        </div>
      ) : (
        <div>
          <p className={styles.usado}>Carro usado, rodou {km} km.</p>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
