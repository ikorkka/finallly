import React, { useState } from "react";
import s from "./PayForm.module.css";
import { Checkbox, Button, Input } from "antd";
import { Modal } from "antd";
import m from "../PurchaseFirstPage/PurchaseFirst.module.css";
import Image from "next/image";
const PayForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethods, setPaymentMethods] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePaymentMethodChange = (checkedValues) => {
    // Ограничение выбора только одного способа оплаты
    if (checkedValues.length > 0) {
      setPaymentMethods([checkedValues[checkedValues.length - 1]]);
    } else {
      setPaymentMethods([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Простая валидация имени и адреса
    if (name.trim() === "") {
      alert("Пожалуйста, введите ваше имя и фамилию.");
      return;
    }

    if (address.trim() === "") {
      alert("Пожалуйста, введите ваш адрес.");
      return;
    }

    // Отправка формы или выполнение других действий
    console.log("Форма отправлена!");
    console.log("Имя:", name);
    console.log("Адрес:", address);
    console.log("Способы оплаты:", paymentMethods);
  };

  return (
    <div className={s.container}>
      <div className={s.title}>
        <div className={s.title_left}>
          <h1>Форма Оплаты</h1>
          <form onSubmit={handleSubmit}>
            <div className={s.title_input_all}>
              <div className={s.first_input}>
                <Input
                  className={s.input_first}
                  placeholder="Ваше Имя и Фамилия (как в паспорте)"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div className={s.second_input}>
                <Input
                  className={s.input_second}
                  placeholder="Ваш Адрес"
                  value={address}
                  onChange={handleAddressChange}
                />
              </div>
            </div>
            <h2 className={s.sposoby}>Способы Оплаты</h2>
            <div className={s.all_checkbox}>
              <div className={s.first_checkbox}>
                <Checkbox.Group onChange={handlePaymentMethodChange}>
                  <Checkbox value="При получении">При получении</Checkbox>
                </Checkbox.Group>
              </div>
              <div className={s.second_checkbox}>
                <Checkbox.Group onChange={handlePaymentMethodChange}>
                  <Checkbox
                    value="По Карте"
                    disabled={paymentMethods.length > 0}
                  >
                    По Карте
                  </Checkbox>
                </Checkbox.Group>
              </div>
            </div>
            <div className={s.btn_div}>
              <Button className={s.btn} type="primary" htmlType="submit">
                Отправить
              </Button>
            </div>
          </form>
        </div>
        <div className={s.title_right}>
          <h1>Ваш Товар</h1>
          <div className={s.title_right_photo}>
            <img onClick={showModal}                         src="/england.png"
 alt="violet" />
            <div className={m.modal}>
              <Modal
                className={s.modal_modal}
                title=""
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <div className={s.all_otziv}>
                  <div className={s.first_otziv}>
                    <Image
                        src="/england.png"
                        alt="user_img"
                      width={100}
                      height={130}
                    ></Image>
                    <h2 className={s.h}>103 899₽</h2>
                    <p>
                    Nike Sportswear Tech FleeceMens Full-Zip Hoodie
                    </p>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayForm;
