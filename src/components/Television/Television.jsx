import React, { useState } from "react";
import TelevisionTv from "./TelevisionTv/TelevisionTv";
import Footer from "../footer/Footer";
import Header from "../Header/Header";
import s from "../Mobile/Mobile.module.css";
import { television } from "@/constans/Television";

const Television = () => {
  const [select, setSelect] = useState("");
  const [filteredTelevisions, setFilteredTelevisions] = useState(television);

  const handleFilterChange = (e) => {
    const selectedPrice = e.target.value;
    setSelect(selectedPrice);

    if (selectedPrice === "") {
      setFilteredTelevisions(television);
    } else {
      const filtered = television.filter(
        (item) => item.price <= parseInt(selectedPrice)
      );
      setFilteredTelevisions(filtered);
    }
  };

  return (
    <div className={s.container}>
      <Header />

      <div className={s.home}>
        <div className={s.filter}>
          <div className={s.filter_brend}>
            <h1>Фильтр по параметрам</h1>
            <select
              className={s.filter_brend_select}
              value={select}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="990">990</option>
              <option value="1000">1000</option>
              <option value="1100">1100</option>
              <option value="1200">1200</option>
              <option value="1300">1300</option>
              <option value="14000">14000</option>
            </select>
          </div>
        </div>
        <div className={s.card}>
          {filteredTelevisions.map((item) => (
            <TelevisionTv
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

export default Television;
