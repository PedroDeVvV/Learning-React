import React from "react";

const UserDetails = ({ name, age, job, adult }) => {
  return (
    <div>
      <h2>Detalhes do Usuário</h2>
      <ul>
        <li>Nome: {name}</li>
        <li>Idade: {age} anos</li>
        <li>Profissão: {job}</li>
      </ul>
      {age >= 18 ? (
        <div>
          <p>{name} pode ser habilitado</p>
        </div>
      ) : (
        <div>
          <p>{name} é menor, portanto não pode ser habilitado.</p>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
