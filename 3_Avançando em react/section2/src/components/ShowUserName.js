import React from "react";

const ShowUserName = (props) => {
  return (
    <div>
      <h2>
        O nome do user é: {props.name}
      </h2>
    </div>
  );
};

export default ShowUserName;
