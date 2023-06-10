import s from "./Information.module.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";

import Image from "next/image";
import Footer from "../footer/Footer";
const Information = () => {
  return (
    <div className={s.home}>
      <div className={s.container}>
            <div className={s.rating_area}>
              <input type="radio" id="star-5" name="rating" value="5" />
              <label for="star-5" title="Оценка «5»"></label>
              <input type="radio" id="star-4" name="rating" value="4" />
              <label for="star-4" title="Оценка «4»"></label>
              <input type="radio" id="star-3" name="rating" value="3" />
              <label for="star-3" title="Оценка «3»"></label>
              <input type="radio" id="star-2" name="rating" value="2" />
              <label for="star-2" title="Оценка «2»"></label>
              <input type="radio" id="star-1" name="rating" value="1" />
              <label for="star-1" title="Оценка «1»"></label>
            </div>
          </div>
    </div>
  );
};

export default Information;
