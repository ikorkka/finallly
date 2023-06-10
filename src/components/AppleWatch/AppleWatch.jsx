import React, { useState } from "react";
import s from "../Mobile/Mobile.module.css";
import Header from "../Header/Header";
import AppleWatchCart from "./AppleWatchCart/AppleWatchCart";
import { applewatch } from "@/constans/applewatch";

const AppleWatch = () => {
  const [select, setSelect] = useState("");
  const [filteredAppleWatches, setFilteredAppleWatches] = useState(applewatch);

  const handleFilterChange = (e) => {
    const selectedPrice = e.target.value;
    setSelect(selectedPrice);

    if (selectedPrice === "") {
      setFilteredAppleWatches(applewatch);
    } else {
      const filtered = applewatch.filter(
        (item) => item.price <= parseInt(selectedPrice)
      );
      setFilteredAppleWatches(filtered);
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
              <option value="20000">20000</option>
              <option value="25000">25000</option>
              <option value="40000">40000</option>
              <option value="60000">60000</option>
              <option value="70000">MAX</option>
            </select>
          </div>
        </div>
        <div className={s.card}>
          {filteredAppleWatches.map((item) => (
            <AppleWatchCart
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
    </div>
  );
};

export default AppleWatch;
