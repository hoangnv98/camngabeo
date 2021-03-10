import React, { useState } from "react";

export default function User() {
  const [name, setName] = useState("");
  const handleInput = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <input type="text" name="name" onChange={(e) => handleInput(e)} />
      <button className="Object" onClick={handleInput}>
        My name is {name}
      </button>
    </>
  );
}
