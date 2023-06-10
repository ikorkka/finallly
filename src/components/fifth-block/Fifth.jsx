import React, { useState } from "react";
import { useRouter } from 'next/router';
import styles from "./Fifth.module.css";
import Image from "next/image";
import Link from 'next/link';

const Fifth = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    if (!name) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "Введите ваше имя" }));
    }

    if (!phone) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Введите ваш телефон",
      }));
    }

    if (!contactMethod) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        contactMethod: "Выберите предпочтительный способ связи",
      }));
    }

    if (!isAgreed) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        isAgreed: "Подтвердите согласие на обработку персональных данных",
      }));
    }

    // Добавьте здесь логику для отправки данных или других действий, если все поля валидны
  };

  return (
    <div className={styles.fifth}>
      <div className={styles.fifth__container}>
        <div className={styles.fifth__body}>
          <div className={styles.fifth__form}>
            <div className={styles.form__title}>
              <div className={styles.form__title_main}>
                <h1>
                  Всем своим покупателем <br /> мы говорим: <br />
                  «Глупый вопрос — не <br /> заданный вопрос!»{" "}
                </h1>
              </div>
              <div className={styles.form__subtitle}>
                <Image
                  src="/Image/FifthImg/smileLogo.png"
                  alt="Happy-Smile"
                  width={37}
                  height={37}
                />
                <p>
                  Так что не стесняйтесь! Пишите, <br /> звоните,
                  консультируйтесь. Мы <br /> всегда рады Вам помочь!
                </p>
              </div>
            </div>
            <div className={styles.form__info}>
              <div className={styles.form__filling}>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className={styles.error}>{errors.name}</p>}
                <input
                  type="text"
                  placeholder="Телефон"
                  value={phone}
                  onChange={(e) => {
                    const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
                    setPhone(onlyNumbers);
                  }}
                  onKeyPress={(e) => {
                    const charCode = e.which ? e.which : e.keyCode;
                    if (
                      charCode !== 8 &&
                      charCode !== 0 &&
                      (charCode < 48 || charCode > 57)
                    ) {
                      e.preventDefault();
                    }
                  }}
                />

                {errors.phone && <p className={styles.error}>{errors.phone}</p>}
              </div>
              <h2>Предпочтительный способ связи:</h2>
              <div className={styles.form__social_choice}>
                <div>
                  <input
                    type="radio"
                    id="contactChoice1"
                    name="contact"
                    value="Telegram"
                    checked={contactMethod === "Telegram"}
                    onChange={(e) => setContactMethod(e.target.value)}
                  />
                  <label htmlFor="contactChoice1">Telegram</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="contactChoice2"
                    name="contact"
                    value="WhatsApp"
                    checked={contactMethod === "WhatsApp"}
                    onChange={(e) => setContactMethod(e.target.value)}
                  />
                  <label htmlFor="contactChoice2">WhatsApp</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="contactChoice3"
                    name="contact"
                    value="Phone"
                    checked={contactMethod === "Phone"}
                    onChange={(e) => setContactMethod(e.target.value)}
                  />
                  <label htmlFor="contactChoice3">Звонок</label>
                </div>
              </div>
              {errors.contactMethod && (
                <p className={styles.error}>{errors.contactMethod}</p>
              )}
                <button  onClick={handleSubmit}>
                  <Link href="/obratka">
                    Отправить
                  </Link>
                </button>
              <div className={styles.form__checkbox}>
                <input
                  type="checkbox"
                  id="text"
                  name="interest" 
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                />
                <label htmlFor="text">
                  Отправляя заявку, вы даете согласие на обработку персональных
                  данных
                </label>
                {errors.isAgreed && (
                  <p className={styles.error}>{errors.isAgreed}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifth;
