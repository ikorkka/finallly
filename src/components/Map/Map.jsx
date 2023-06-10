import React from "react";
import s from "./Map.module.css";
import Footer from "../footer/Footer";
import Header from "../Header/Header";
const Map = () => {
  return (
    <div>
    <div className={s.container}>
      <div className={s.title}>
        <h1 className={s.contact}>Контакты:</h1>
        <div className={s.title_adres}>
          <h1>
            Наш Адрес не меняется <br /> уже 8 лет! Мы находимся :
          </h1>
          <div className={s.adres}>
            <p>Адрес:</p>
            <h5>На адрес:115/1 ул. Ибраимова, Бишкек</h5>
            <h3>Часы работы: с 10:00 до 21:00 без выходных</h3>
          </div>
          <div className={s.number}>
            <p>Телефоны:</p>
            <a href="tel:0556042020">0 556 04 20 20</a>
          </div>
        </div>
        <iframe className={s.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.9441333100317!2d74.6201935!3d42.8740233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7df8ad88681%3A0x8c8be4738821a7b3!2zSVQgQWNhZGVteSAoSVQg0JDQutCw0LTQtdC80LjRjykg0L_RgNC4INCa0JDQoNCf0J7Qow!5e0!3m2!1sru!2skg!4v1683554072950!5m2!1sru!2skg"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    </div>
  );
};

export default Map;
