import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "../Header/Header";

const Obtatka = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChecked(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
        <Header/>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "34px",
          textAlign: "center",
          padding: "250px",
        }}
      >
        {isChecked ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="58"
              height="58"
              viewBox="0 0 48 48"
              fill="green"
              style={{ marginRight: "12px" }}
            >
              <path d="M18 32.17L4.83 18l-2.83 2.83L18 40 46 12l-2.83-2.83L18 32.17z" />
            </svg>
            <span style={{ color: "green", fontWeight: "bold" }}>
              Вы успешно отправили свой отзыв
            </span>
          </div>
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </div>
  );
};

export default Obtatka;
