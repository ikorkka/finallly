import React from "react";
import styles from "./MobilePhone.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Information from "@/components/Information/Information";
import { useRouter } from "next/router";
const MobilePhone = ({ img, title, oldprice, id, price }) => {
  const router = useRouter()
  return (
    <div>
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
                <button  className={styles.btn} onClick={() => router.push(`/mobil/${id}`)} >Купить</button>
                </div>
              </div>
              <div className={styles.info}>
                <Information />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MobilePhone;
