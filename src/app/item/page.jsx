"use client";
import React, { useEffect, useState } from "react";
import styles from "./item.module.css";
import Link from "next/link";

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch("/api/saveData");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchingData();
  }, []);

  return (
    <div className={styles.container}>
      <ul className={styles.header}>
        <h2>
          {" "}
          <Link href={"/"}>{"Go back<"}</Link> List Products
        </h2>
        <li className={styles.name}>Barcode</li>
        <li className={styles.name}>Name</li>
        <li className={styles.name}>Design</li>
        <li className={styles.name}>Sizes</li>
        <li className={styles.name}>Colors</li>
        <li className={styles.name}>Date</li>
      </ul>
      {data.map((item, index) => (
        <ul key={index} className={styles.item}>
          <ul className={styles.design}>
            <li>{item.design}</li>
          </ul>
          <ul className={styles.design}>
            <li>Name</li>
          </ul>
          <ul className={styles.price}>
            <li>{item.price}</li>
          </ul>{" "}
          <ul className={styles.sizes}>
            {item.sizes.map((size, index) => (
              <li key={index}> {size}</li>
            ))}
          </ul>
          <ul className={styles.colors}>
            {item.colors.map((color, index) => (
              <li key={index}> {color}</li>
            ))}
          </ul>
          <ul className={styles.dateTime}>
            <li>
              {!item.date ? "No tiem" : new Date(item.date).toLocaleString()}
            </li>
          </ul>
        </ul>
      ))}
    </div>
  );
};

export default Page;
