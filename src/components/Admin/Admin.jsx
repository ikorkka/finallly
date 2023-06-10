import React from "react";
import s from "./Admin.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
const Admin = () => {
  return (
    <div className={s.container}>
      <motion.div className={s.title}
      
      layout
      transition={{
        opacity: { ease: "linear" },
        layout: { duration: 0.5 },
        duration: 0.7,
      }}
      initial="hidden"
      // transition={{ duration: 0.6 }}
      whileInView="visible"
      variants={
        {
          hidden: { scale: 0 },
          visible: { scale: 1 }

        }
      } 
      >
      <div className={s.first}>
          <Link href="upload">
            <div className={s.first_back}>
              <h1></h1>
            </div>
          </Link>
        </div>
        <div className={s.first}>
          <Link href="/toadmin">
            <div className={s.first_back}>
              <h1></h1>
            </div>
          </Link>
        </div>
        <div className={s.first}>
          <Link href="/toadmin">
            <div className={s.first_back}>
              <h1></h1>
            </div>
          </Link>
        </div>
        <div className={s.first}>
          <Link href="/toadmin">
            <div className={s.first_back}>
              <h1></h1>
            </div>
          </Link>
        </div>
        <div className={s.first}>
          <Link href="/toadmin">
            <div className={s.first_back}>
              <h1></h1>
            </div>
          </Link>
        </div>
        <div className={s.first}>
          <Link href="/toadmin">
            <div className={s.first_back}>
              <h1></h1>
            </div>
          </Link>
        </div>
        <div className={s.first}>
          <Link href="/toadmin">
            <div className={s.first_back}>
              <h1></h1>
            </div>
          </Link>
        </div>
        <div className={s.first}>
          <Link href="/toadmin">
            <div className={s.first_back}>
              <h1></h1>
            </div>
          </Link>
        </div>
      </ motion.div>
    </div>
  );
};

export default Admin;
