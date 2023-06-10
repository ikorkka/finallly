import React, { useState } from "react";
import axios from "axios";
import s from "./Login.module.css";
import { Input } from "antd";
import Link from "next/link";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    const value = e.target.value;
    const regex = /^[A-Za-z]*$/;

    if (regex.test(value)) {
      setName(value);
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: "Введите имя на английском не используя цифры" }));
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (regex.test(value)) {
      setEmail(value);
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Введите корректный email" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    if (!name) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "Введите ваше имя" }));
    }

    if (!email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Введите ваш email" }));
    }

    try {
      if (name && email) {
        const response = await axios.post("/api/login", { name, email });
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={s.login_boss}>
      <div className={s.login}>
        <div className={s.login_title}>
          <h1>Log In</h1>
        </div>
        <form className={s.login_form} onSubmit={handleSubmit}>
          <Input
            className={s.login_form_name}
            placeholder="Ваше имя"
            value={name}
            onChange={handleNameChange}
          />
          {errors.name && <p className={s.error}>{errors.name}</p>}
          <Input
            className={s.login_form_pasword}
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          {errors.email && <p className={s.error}>{errors.email}</p>}
          <div className={s.btn}>
            <div className={s.login_btn}>
              <button type="submit">Log In</button>
            </div>
            <Link className={s.login_btn_admin} href="/awdawdaw">
              Autorization
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
