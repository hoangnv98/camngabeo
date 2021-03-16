import React, { useState } from "react";
export default function Product() {
  const [state, setstate] = useState(0);
  return <h1>{state}</h1>;
}
