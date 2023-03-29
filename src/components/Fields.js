import React from "react";

const fields = ({ name, email, index }) => {
  return (
    <div className="data_val">
      <h4>{name}</h4>
      <h4>{email}</h4>
      <h4>{index}</h4>
    </div>
  );
};

export default fields;
