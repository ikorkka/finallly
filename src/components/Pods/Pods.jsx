import React, { useState } from "react";
import s from "../Mobile/Mobile.module.css";
import Header from "../Header/Header";
import PodsCart from "./Podscart/PodsCart";
import { pods } from "@/constans/pods";

const Pods = () => {
  const [select, setSelect] = useState("");
  const [filteredPods, setFilteredPods] = useState(pods);

  const handleFilterChange = (e) => {
    const selectedPrice = e.target.value;
    setSelect(selectedPrice);

    if (selectedPrice === "") {
      setFilteredPods(pods);
    } else {
      const filtered = pods.filter(
        (item) => item.price <= parseInt(selectedPrice)
      );
      setFilteredPods(filtered);
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
              <option value="25000">25000</option>
              <option value="40000">40000</option>
              <option value="9000">9000</option>
              <option value="60000">60000</option>
              <option value="2000">2000</option>
              <option value="35000">35000</option>
            </select>
          </div>
        </div>
        <div className={s.card}>
          {filteredPods.map((item) => (
            <PodsCart
              key={item.id}
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

export default Pods;
