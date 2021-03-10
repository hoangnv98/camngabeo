import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../../styles/product/product.module.css";

export default function UserSetting() {
  const [name, setName] = useState("");

  const router = useRouter();
  const { product } = router.query;
  const handleInput = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <Head>
        <title>Setting Global</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <input type="text" name="name" onChange={(e) => handleInput(e)} />
      <h1 className={styles.titleSetting}> {product} Setting</h1>
    </>
  );
}
