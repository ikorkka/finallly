import React from "react";
import s from "./Upload.module.css";
import { Input } from "antd";

const Upload = () => {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <div className={s.input_all}>
          <div className={s.first_input}>
            <input placeholder="Basic usage" />
            <button>Submit</button>
          </div>
          <div className={s.second_input}>
            <input placeholder="Basic usage" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
