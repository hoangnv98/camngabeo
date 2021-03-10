import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function User() {
  const [name, setName] = useState("");

  const router = useRouter();
  const { id } = router.query;
  const handleInput = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <Head>
        <title>ReactJs Next Js</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <input type="text" name="name" onChange={(e) => handleInput(e)} />
      <button className="Object" onClick={handleInput}>
        My name is {name} {id}
      </button>
    </>
  );
}
