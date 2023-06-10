import React, { useState } from "react";
import FifthCard from "../Objekt/Objekt";
import Footer from "../footer/Footer";
import Header from "../Header/Header";
import styles from "./Product.module.css";
import { object } from "@/constans/Product";

const Product = () => {
  const [select, setSelect] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(object);

  const handleFilterChange = (e) => {
    const selectedPrice = e.target.value;
    setSelect(selectedPrice);

    if (selectedPrice === "") {
      setFilteredProducts(object);
    } else {
      const filtered = object.filter(
        (item) => item.price <= parseInt(selectedPrice)
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.smartfon}></h1>
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
              <option value="110000">110000</option>
              <option value="120000">120000</option>
              <option value="130000">130000</option>
              <option value="140000">140000</option>
              <option value="150000">150000</option>
            </select>
          </div>
          <div className={styles.money_filter}></div>
        </div>
        <div className={styles.product}>
          {filteredProducts.map((item) => (
            <FifthCard
              key={item.id}
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

export default Product;
