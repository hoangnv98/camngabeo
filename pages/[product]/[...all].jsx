import { route } from "next/dist/next-server/server/router";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import styles from "../../styles/product/product.module.css";

export default function UserSetting() {
  const [name, setName] = useState("");

  const router = useRouter();
  const { product } = router.query;
  console.log("product", router.query);

  const handleInput = (e) => {
    console.log("e", e.target);
    setName(e.target.value);
  };
  const handleClickButton = () => {
    router.push("/users");
  };
  return (
    <>
      <Head>
        <title>All State Global</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <input type="text" name="name" onChange={(e) => handleInput(e)} />
      <h1 className={styles.titleSetting}>
        {product} {name}
        {router.query.all && router.query.all[0]}{" "}
        {router.query.all && router.query.all[1]}
      </h1>
      <Link href="/users">
        <div>123</div>
      </Link>
      <button className={styles.button} onClick={handleClickButton}>
        Link
      </button>
    </>
  );
}
