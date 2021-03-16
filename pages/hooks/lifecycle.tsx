import React, { useState } from "react";

type StateStype = {
  counter: Number;
};
function LifeCycle() {
  const [com, setCom] = useState(222);
  return (
    <div className="container">
      <h1>Play Life Cycle</h1>
      <h2>{com}</h2>
      <button onClick={() => setCom((prev) => prev + 1)}>Counted Add</button>
    </div>
  );
}

export default LifeCycle;
