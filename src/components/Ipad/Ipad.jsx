import React from "react";
import styles from "../Mobile/Mobile.module.css"
import { useState } from "react";
import Header from "../Header/Header";
import { planshet } from "@/constans/Planshet";
import IpadCart from "./IpadCart/IpadCart";
import Footer from "../footer/Footer";
const Ipad = () => {
  const [filteredMobiles, setFilteredMobiles] = useState(planshet);

  const handleFilterChange = (e) => {
    const selectedPrice = e.target.value;
    setSelect(selectedPrice);

    if (selectedPrice === "") {
      setFilteredMobiles(planshet);
    } else {
      const filtered = planshet.filter(
        (item) => item.price <= parseInt(selectedPrice)
      );
      setFilteredMobiles(filtered);
    }
  };
  const [select, setSelect] = useState("");
  return (
    <div>
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
              <option value="20000">20000</option>
              <option value="40000">40000</option>
              <option value="50000">50000</option>
              <option value="70000">70000</option>
              <option value="90000">90000</option>
            </select>
          </div>
        </div>
        <div className={styles.card}>
          {filteredMobiles.map((item) => (
            <IpadCart
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

export default Ipad;
