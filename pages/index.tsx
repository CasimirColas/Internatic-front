import Head from "next/head";
import { useEffect, useState } from "react";
import ViewCard from "../components/ViewCard";
import styles from "../styles/Home.module.css";
import { faker } from "@faker-js/faker";

interface Jobs {
  title: string;
  img: string;
  tags: string[];
  desc: string;
  loc: string;
}
export default function Home() {
  const [jobList, setJobList] = useState<Jobs[]>(Array(10));
  useEffect(() => {
    setJobList(
      Array(10)
        .fill("X")
        .map(() => {
          return {
            title: `${faker.company.name()}`,
            img: `${faker.image.business(640, 480, true)}`,
            tags: Array(4)
              .fill("X")
              .map(() => `${faker.commerce.department()}`),
            desc: `${faker.commerce.productDescription()}`,
            loc: `${faker.address.cityName()}`,
          };
        })
    );
  }, []);
  console.log(jobList);

  return (
    <div className={styles.container}>
      <Head>
        <title>Internatic</title>
        <meta name="Seek jobs anywhere" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Internatic</h1>
        <div className="offer-selection">
          {jobList.map((e, index) => (
            <ViewCard key={index} {...e} />
          ))}
        </div>
      </main>
    </div>
  );
}
