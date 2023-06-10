import React, { useState } from "react";
import MobilePhone from "./MobilePhone/MobilePhone";
import Footer from "../footer/Footer";
import Header from "../Header/Header";
import styles from "./Mobile.module.css";
import { mobile } from "@/constans/Mobile";

const Mobile = () => {
  const [select, setSelect] = useState("");
  const [filteredMobiles, setFilteredMobiles] = useState(mobile);

  const handleFilterChange = (e) => {
    const selectedPrice = e.target.value;
    setSelect(selectedPrice);

    if (selectedPrice === "") {
      setFilteredMobiles(mobile);
    } else {
      const filtered = mobile.filter(
        (item) => item.price <= parseInt(selectedPrice)
      );
      setFilteredMobiles(filtered);
    }
  };

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
              <option value="60000">60000</option>
              <option value="70000">70000</option>
              <option value="80000">80000</option>
              <option value="90000">90000</option>
              <option value="100000">100000</option>
            </select>
          </div>
        </div>
        <div className={styles.card}>
          {filteredMobiles.map((item) => (
            <MobilePhone
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

export default Mobile;
