import React, { useState } from "react";
import LaptopTitle from "./LaptopTitle/LaptopTitle";
import Footer from "../footer/Footer";
import Header from "../Header/Header";
import styles from "../Mobile/Mobile.module.css";
import { laptop } from "@/constans/Laptop";

const Laptop = () => {
  const [select, setSelect] = useState("");
  const [filteredLaptops, setFilteredLaptops] = useState(laptop);

  const handleFilterChange = (e) => {
    const selectedPrice = e.target.value;
    setSelect(selectedPrice);

    if (selectedPrice === "") {
      setFilteredLaptops(laptop);
    } else {
      const filtered = laptop.filter(
        (item) => item.price <= parseInt(selectedPrice)
      );
      setFilteredLaptops(filtered);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.home}>
        <div className={styles.filter}>
          <div className={styles.filter_brend}>
            <h1>Фильтр по параметрам</h1>
            <select
              className={styles.filter_brend_select}
              value={select}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="84000">84000</option>
              <option value="67000">67000</option>
              <option value="17000">17000</option>
              <option value="22000">22000</option>
              <option value="80000">80000</option>
              <option value="81000">81000</option>

            </select>
          </div>
        </div>
        <div className={styles.card}>
          {filteredLaptops.map((item) => (
            <LaptopTitle
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              oldprice={item.oldprice}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Laptop;
