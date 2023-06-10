import s from "./Fourth.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";

const Information = () => {
  return (
    <div className={s.fourth}>
      <div className={s.fourth__container}>
        <div className={s.fourth__body}>
          <div className={s.fourth__info}>
            <h1>Мы рады, что вы с нами!</h1>
            <div className={s.fourth__info_subtitle}>
              <h4>Магазин электроники – Gorbushka _moscow</h4>
              <p>
                Наш магазин на рынке с 2016 года. За это <br /> время мы
                научились понимать Вас без лишних <br /> слов и действий!
              </p>
              <p>
                В продаже различная техника: от портативных <br /> колонок до
                кастомизированной техники, которую <br /> сейчас попросту не
                найти в свободной продаже в <br /> России.  Apple, Samsung,
                Xiaomi, JBL и другие - <br /> ТОЛЬКО ОРИГИНАЛ!
              </p>
            </div>
          </div>
          <div className={s.fourth__second_info}>
            <div className={s.fourth__address}>
              <h2>
                Наш адрес не <br /> меняется уже 8 лет! <br /> Мы находимся :{" "}
              </h2>
              <div className={s.fourth__address_subtitle}>
                <h3>
                  Москва, ул. Барклая, д. 8  <br /> ТЦ Горбушка (старая),
                  павильоны 108/1, 185, 140/6
                </h3>
                <p>Часы работы: с 10:00 до 21:00 без выходных</p>
              </div>
            </div>
            <div className={s.fourth__item}>
              <div>
                <div className={s.fouth__item_logo}>
                  <Image
                    src="/Image/FourthImg/info.png"
                    alt="logo"
                    width={23}
                    height={23}
                  />
                </div>
                <p>
                  Только <br /> Оригинал
                </p>
              </div>
              <div>
                <div className={s.fouth__item_logo}>
                  <Image
                    src="/Image/FourthImg/info.png"
                    alt="info"
                    width={23}
                    height={23}
                  />
                </div>
                <p>
                  Всегда Чек <br /> + Гарантия
                </p>
              </div>
              <div>
                <div className={s.fouth__item_logo}>
                  <Image
                    src="/Image/FourthImg/info.png"
                    alt="info"
                    width={23}
                    height={23}
                  />
                </div>
                <p>
                  Доставка по всей <br /> России (КАРГО, СДЭК)
                </p>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          grabCursor
          loop
          speed={2000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={6}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className={s.fourth_swiper}
        >
          <SwiperSlide>
            <img className={s.swiper_img} src="./Image/apple.png" alt="apple" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={s.swiper_img} src="./Image/apple.png" alt="aplle" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={s.swiper_img} src="./Image/apple.png" alt="apple" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={s.swiper_img} src="./Image/apple.png" alt="apple" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={s.swiper_img} src="./Image/apple.png" alt="apple" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={s.swiper_img} src="./Image/apple.png" alt="apple" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={s.swiper_img} src="./Image/apple.png" alt="apple" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={s.swiper_img} src="./Image/apple.png" alt="apple" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={s.swiper_img} src="./Image/apple.png" alt="apple" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={s.swiper_img} src="./Image/apple.png" alt="apple" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={s.swiper_img} src="./Image/apple.png" alt="apple" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={s.swiper_img} src="./Image/apple.png" alt="apple" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Information;
