import React , {useState}from "react";

export default function User() {
  const [name, setName] = useState('Tiki');
  return (
    <form action="sds">
      <input type="text" name="name" value={name} onChange={(e) => {
       setName(e.target.value);
      }}/>
      <button className="Object"> My name is {name}</button>
    </form>
  );
}
