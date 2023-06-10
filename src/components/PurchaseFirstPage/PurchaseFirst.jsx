import s from "./PurchaseFirst.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button, Modal } from "antd";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import PurchaseSecond from "../PurchaseSecondPage/PurchaseSecond";
import Header from "../Header/Header";
import { useState } from "react";
import Information from "../Information/Information";
import Link from "next/link";

const PurchaseFirst = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function removeType() {
    setType((current) => !current);

    setStyleClass((prev) => !prev);
  }

  return (
    <div className={s.purchaseFirst}>
      <Header />
      <div className={s.purchaseFirst__container}>
        <div className={s.purchaseFirst__body}>
          <div className={s.purchaseFirst__link}>
            <a href="#"> Главная /</a>
            <a href="#"> Смартфоны /</a>
            <a href="#"> Apple /</a>
            <span>
            Nike Sportswear Tech FleeceMens Full-Zip Hoodie
            </span>
          </div>
          <div className={s.purchaseFirst__title}>
            <h1>Nike Sportswear Tech FleeceMens Full-Zip Hoodie</h1>
          </div>
          <div className={s.purchaseFirst__content}>
            <div className={s.purchaseFirst__swiper}>
              <div className={s.purchaseFirst__swiper_container}>
                <div className={s.purchaseFirst__swipe_title}>
                  <h1>Хит</h1>
                  <div className={s.card__icon}></div>
                </div>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  autoplay={{ delay: 2500 }}
                  speed={700}
                  modules={[Navigation, Autoplay]}
                  className={s.purchaseFirstSwiper}
                >
                  <SwiperSlide>
                    <div className={s.purchaseFirst_slide}>
                      <Image
                        src="/england.png"
                        alt="Smartfon"
                        width={362}
                        height={402}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={s.purchaseFirst_slide}>
                      <Image
                        src="/england.png"
                        alt="Smartfon"
                        width={362}
                        height={402}
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className={s.purchaseFirst__characteristic}>
              <div className={s.purchaseFirst__characteristic_title}>
                <div className={s.purchaseFirst__title_info}>
                  <h1>100 000 ₽</h1>
                  <h2>103 899 ₽</h2>
                </div>

              </div>
              <div className={s.purchaseFirst__characteristic_info}>
                <div className={s.characteristic_info_first}>
                  <div className={s.characteristic_info_first_title}>
                    <h1>Размер:</h1>
                  </div>
                  <div className={s.characteristic_info_first_btn}>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                    <button>XXL</button>
                  </div>
                </div>
                <div className={s.characteristic_info_second}>
                  <div className={s.characteristic_info_second_1}>
       
                   
                  </div>
                  <div className={s.characteristic_info_second_2}>
                 
                    
                  </div>
                </div>
              </div>
              <div className={s.purchaseFirst__bottom_info}>
                <Link href="/pay">
                  <button>Купить</button>
                </Link>
                <div>
                  <p>
                    <Image
                      src="/Image/Purchaseimg/logo1.svg"
                      alt="Smartfon"
                      width={14}
                      height={14}
                    />
                    Доставка по Москве в пределах МКАД от 700₽
                  </p>
                  <p>
                    <Image
                      src="/Image/Purchaseimg/logo2.svg"
                      alt="Smartfon"
                      width={14}
                      height={14}
                    />
                    Доставка по всей России через транспортную компанию СДЕК, по
                    100% оплате
                  </p>
                  <p>
                    <Image
                      src="/Image/Purchaseimg/logo3.svg"
                      alt="Smartfon"
                      width={14}
                      height={14}
                    />
                    Отправка происходит в течении часа после оплаты товара.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseFirst;
