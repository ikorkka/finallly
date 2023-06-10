import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Objekt.module.css";

const Objekt = ({ img, title, oldprice, price }) => {
  return (
    <motion.div
      className={styles.second__item}
      layout
      transition={{
        opacity: { ease: "linear" },
        layout: { duration: 0.5 },
        duration: 0.5,
      }}
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { scale: 0 },
        visible: { scale: 1 },
      }}
    >
      <div className={styles.second__card_container}>
        <div className={styles.second__card_body}>
          <div className={styles.second__card_title}>
            <h1>Хит</h1>
            <div className={styles.card__icon}>
              <div className={styles.second__card__favorites}></div>
            </div>
          </div>
          <div className={styles.second__card_img}>
            <Image src={img} alt="Apple-Watch" width={150} height={155} />
          </div>
          <div className={styles.second__card_info}>
            <p>{title}</p>
            <div className={styles.second__card_subtitle}>
              <div className={styles.price}>
                <p>{oldprice}₽</p>
                <h2>{price}₽</h2>
              </div>
              <div>
                <Link href="/second" className={styles.btn}>
                  Купить
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Objekt;
