import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState, useMemo } from "react";
export default function Home() {
  console.log("constructor");
  useEffect(() => {
    console.log(123);
  }, []);
  const [user, setUser] = useState({
    firstName: "Johb",
    lastName: "Candy",
  });
  const fullName = useMemo(() => {
    return user.firstName + " " + user.lastName;
  }, [user]);
  return (
    <div className={styles.container}>
      <Head>
        <title>WOW</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to {fullName}</h1>
        <p className={styles.description}>
          Get started by editing
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </div>
  );
}
