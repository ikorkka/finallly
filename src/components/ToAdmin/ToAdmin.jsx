import React, { useState } from "react";
import axios from "axios";
import s from "./ToAdmin.module.css";
import { Input } from "antd";
import { motion } from "framer-motion";
const ToAdmin = () => {
  const [values, setValues] = useState([]);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  const handleFormSubmit = async () => {
    try {
      // Выполнение POST запроса
      const response = await axios.post("/api/your-endpoint", values);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderInputs = () => {
    const inputPlaceholders = [
      "PLACE 1",
      "PLACE 2",
      "PLACE 3",
      "PLACE 4",
      "PLACE 5",
      "PLACE 6",
      "PLACE 7",
      "PLACE 8",
      "PLACE 9",
      "PLACE 10",
      "PLACE 11",
      "PlACE 12 "
      /* ... Add more placeholder values here */
    ];
    return inputPlaceholders.map((placeholder, index) => (
      <motion.div key={index} className={s.input}
      
      
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
        <Input
          className={s.input_input}
          placeholder={placeholder}
          value={values[index] || ""}
          onChange={(e) => handleInputChange(e, index)}
        />
        <div className={s.input_btn}>
        <button className={s.button} onClick={handleFormSubmit}>Внести изменение</button>
        </div>
      </motion.div>
    ));
  };

  return (
    <div className={s.container}>
      <div className={s.title}>
        <div className={s.all_input}>{renderInputs()}</div>
      </div>
    </div>
  );
};

export default ToAdmin;
