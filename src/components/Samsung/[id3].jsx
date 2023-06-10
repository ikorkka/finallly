import Image from "next/image";
import s from "./Samsung.module.css"
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
const Samsung = () => {
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
                <span>Samsung Galaxy z Flip 3, фиолетовый</span>
              </div>
              <div className={s.purchaseFirst__title}>
                <h1>Samsung Galaxy z Flip 3, фиолетовый</h1>
              </div>
              <div className={s.purchaseFirst__content}>
                <div className={s.purchaseFirst__swiper}>
                  <div className={s.purchaseFirst__swiper_container}>
                    <div className={s.purchaseFirst__swipe_title}>
                      <h1>Хит</h1>
                      <div className={s.card__icon}>
    
                      </div>
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
                            src="/z-fold.jpg"
                            alt="Smartfon"
                            width={362}
                            height={362}
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={s.purchaseFirst_slide}>
                          <Image
                            src="/z-fold.jpg"
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
                      <h1>56 102 ₽</h1>
                      <h2>62 299₽</h2>
                    </div>
                    <div className={s.purchaseFirst__subtitle_info}>
                      <a href="#" onClick={showModal}>
                        Смотреть отзывы
                      </a>
                      <div className={s.modal}>
                        <Modal className={s.modal_modal}
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
                              Я хотел бы поделиться своим впечатлением о новом
                              телефоне, который я недавно приобрел. Этот телефон -
                              настоящая находка!
                            </p>
                          </div>
                          <div className={s.second_otziv}>
                          <Image
                              src="/user_girl.png"
                              alt="user_img"
                              width={50}
                              height={50}
                            ></Image>
                            <p>Экран этого телефона просто великолепен. Он яркий, четкий и цветопередача на высшем уровне. </p>
                          </div>
                          <div className={s.thre_otziv}>
                          <Image
                              src="/user_two.png"
                              alt="user_img"
                              width={50}
                              height={50}
                            ></Image>
                            <p>Качество камеры этого телефона просто поражает. Он оснащен задней камерой, которая делает потрясающие фотографии и видео даже в условиях низкой освещенности.</p>
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
                            <button>
                              <Image
                                src="/Image/Purchaseimg/checkmark.svg"
                                alt="Smartfon"
                                width={17}
                                height={13.5}
                              />
                            </button>
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
                        <div className={s.info_second_title}>
                          <a href="">Все характеристики &#8594;</a>
                        </div>
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
                          <button>6,1"</button>
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

export default Samsung;