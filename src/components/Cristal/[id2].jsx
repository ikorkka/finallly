import React, { useState } from "react";
import s from "../PurchaseFirstPage/PurchaseFirst.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button, Modal } from "antd";
import { Navigation, Autoplay } from "swiper";
import PurchaseSecond from "../PurchaseSecondPage/PurchaseSecond";
import Header from "../Header/Header";
const Cristal = () => {
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
  return (
    <div>
      <div className={s.purchaseFirst}>
        <Header />
        <div className={s.purchaseFirst__container}>
          <div className={s.purchaseFirst__body}>
            <div className={s.purchaseFirst__link}>
              <a href="#"> Главная /</a>
              <a href="#"> Смартфоны /</a>
              <a href="#"> Apple /</a>
              <span>
                Basis sind eine Quadcore-CPU, 16 GB Speicher und Android 5.0
                (Lollipop).
              </span>
            </div>
            <div className={s.purchaseFirst__title}>
              <h1>
                Basis sind eine Quadcore-CPU, 16 GB Speicher und Android 5.0
              </h1>
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
                          src="/cristal.jpg"
                          alt="Smartfon"
                          width={362}
                          height={362}
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={s.purchaseFirst_slide}>
                        <Image
                          src="/cristal.jpg"
                          alt="Smartfon"
                          width={362}
                          height={362}
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className={s.purchaseFirst__characteristic}>
                <div className={s.purchaseFirst__characteristic_title}>
                  <div className={s.purchaseFirst__title_info}>
                    <h1>86 965 ₽</h1>
                    <h2>1 00 000 ₽</h2>
                  </div>
                  <div className={s.purchaseFirst__subtitle_info}>
                    <a href="#" onClick={showModal}>
                      Смотреть отзывы
                    </a>
                    <div className={s.modal}>
                      <Modal
                        className={s.modal_modal}
                        title=""
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                      >
                        <div className={s.all_otziv}>
                          <div className={s.first_otziv}>
                            <Image
                              src="/user.png"
                              alt="user_img"
                              width={50}
                              height={50}
                            ></Image>
                            <p>
                              Я оцениваю яркость, контрастность и резкость
                              картинки. Каждая деталь отображается с высокой
                              четкостью, цвета яркие и насыщенные.
                            </p>
                          </div>
                          <div className={s.second_otziv}>
                            <Image
                              src="/user_girl.png"
                              alt="user_img"
                              width={50}
                              height={50}
                            ></Image>
                            <p>
                              Звук телевизора также впечатляет. Интегрированная
                              аудиосистема создает пространственный и объемный
                              звук, позволяющий погрузиться в атмосферу
                              происходящего на экране.
                            </p>
                          </div>
                          <div className={s.thre_otziv}>
                            <Image
                              src="/user_two.png"
                              alt="user_img"
                              width={50}
                              height={50}
                            ></Image>
                            <p>
                              Я очень доволен этим телевизором и считаю его
                              отличным выбором
                            </p>
                          </div>
                        </div>
                      </Modal>
                    </div>
                  </div>
                </div>
                <div className={s.purchaseFirst__characteristic_info}>
                  <div className={s.characteristic_info_first}>
                    <div className={s.characteristic_info_first_title}>
                      <h1>Модель:</h1>
                    </div>
                    <div className={s.characteristic_info_first_btn}>
                      <button>LED TV 75 Zoll (189 cm), 4K UHD, Smart TV</button>
                    </div>
                  </div>
                  <div className={s.characteristic_info_second}>
                    <div className={s.characteristic_info_second_1}>
                      <div className={s.info_second_content}>
                        <h1>Цвет:</h1>
                        <div className={s.info_second_content_btn}>
                          <button>
                            <Image
                              src="/Image/Purchaseimg/checkmark.svg"
                              alt="Smartfon"
                              width={17}
                              height={13.5}
                            />
                          </button>
                        </div>
                        <p>black</p>
                        <h1>Оперативная память:</h1>
                        <button className={s.info_second_content_btn_2}>
                          8 GB
                        </button>
                      </div>
                      <div className={s.info_second_title}></div>
                    </div>
                    <div className={s.characteristic_info_second_2}>
                      <div className={s.info_second_2}>
                        <h1>Встроенная память:</h1>
                        <div>
                          <button>128 GB</button>
                          <button>256 GB</button>
                        </div>
                      </div>
                      <div className={s.info_second_2_down}>
                        <h1>Экран:</h1>
                        <button>189 cm</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.purchaseFirst__bottom_info}>
                  <button>Купить</button>
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
                      Доставка по всей России через транспортную компанию СДЕК,
                      по 100% оплате
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
    </div>
  );
};

export default Cristal;
