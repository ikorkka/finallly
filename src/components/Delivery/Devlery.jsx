import React from "react";
import s from "./Devlery.module.css";
import Link from "next/link";
import Footer from "../footer/Footer";
import Header from "../Header/Header";
const Devlery = () => {
  return (
    <div> 
             <Header/>

      <div className={s.home}>
        <div className={s.delivery}>
          <h1>Доставка и оплата</h1>
        </div>
        <div className={s.delivery_title}>
          <h1>Условия доставки</h1>
          <div className={s.delivery_title_desc}>
            <p>
              Стоимость доставки: стоимость доставки зависит от выбранного
              способа доставки, адреса доставки и веса товара. Стоимость
              доставки указывается при оформлении заказа.
            </p>
            <p>
              Сроки доставки: сроки доставки также зависят от выбранного способа
              доставки и адреса доставки. Обычно срок доставки составляет от 1
              до 5 рабочих дней.
            </p>
            <p>
              Способы доставки: мы предлагаем несколько способов доставки,
              включая курьерскую доставку, почтовую доставку и самовывоз.
              Выбранный способ доставки можно указать при оформлении заказа.
            </p>
            <p>
              Адрес доставки: мы доставляем товары по указанному адресу.
              Пожалуйста, убедитесь, что адрес доставки указан верно.
            </p>
          </div>
        </div>
        <div className={s.conditions}>
          <h1>Условия оплаты</h1>
          <div className={s.conditions_title}>
            <p>Для начало расмотрим способы оплаты:</p>
            <p>Оплпту оформляют при получении в руки</p>
            <p>
              Илиже можете оплатить банковскую карту при нажатии на кнопку ниже
              вы увидите список
            </p>
          </div>
          <Link className={s.btn_bank} href="/bank">
            Список
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Devlery;
