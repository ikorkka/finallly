import React from "react";
import s from "./About.module.css";
import Footer from "../footer/Footer";
const About = () => {
  return (
    <div className={s.home}>
      <div className={s.title}>
        <div className={s.title_title}>
          <h1>Мы рады, что вы с нами!</h1>
          <p>
            Магазин электроники – Gorbushka _moscow Наш магазин на рынке с 2016
            года. За это время мы научились понимать Вас без лишних слов и
            действий! В продаже различная техника: от портативных колонок до
            кастомизированной техники, которую сейчас попросту не найти в
            свободной продаже в России.  Apple, Samsung, Xiaomi, JBL и другие  -
            ТОЛЬКО ОРИГИНАЛ!  
          </p>
        </div>
        <div className={s.title_photo}>
            <img src="./belek.svg" alt="brlek" />
        </div>
      </div>
      <div className={s.title_desk}>
        <img src="./original.svg" alt="awdqwd" />
        <img src="./chek.svg" alt="wdad" />
        <img src="dostavka.svg" alt="awdawda    " />
      </div>
      <Footer/>
    </div>
  );
};

export default About;
