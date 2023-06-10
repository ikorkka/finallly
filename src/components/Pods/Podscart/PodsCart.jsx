import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../../Laptop/LaptopTitle/LaptopTitle.module.css";
const PodsCart = ({ img, title, oldprice, price }) => {
  return (
    <motion.div
      className={styles.second__item}
      layout
      transition={{
        opacity: { ease: "linear" },
        layout: { duration: 0.5 },
        duration: 0.7,
      }}
      initial="hidden"
      // transition={{ duration: 0.6 }}
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
              <Image
                src="/Image/FirstBlock/Union.png"
                alt="Union"
                width={14}
                height={17}
              />
              <div className={styles.second__card__favorites}></div>
            </div>
          </div>
          <div className={styles.second__card_img}>
            <Image src={img} alt="Apple-Watch" width={150} height={155} />
          </div>
          <div className={styles.second__card_info}>
            <p>{title}</p>
            sdfffdsfasadsd
            <div className={styles.second__card_subtitle}>
              <div>
                <p>{oldprice}₽</p>
                <h2>{price}₽</h2>
              </div>
              <div>
                <Link className={styles.btn} href="/aksesuar">
                  Купить
                </Link>
              </div>
            </div>
            <div className={styles.info}></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PodsCart;
