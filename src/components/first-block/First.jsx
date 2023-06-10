import styles from "./First.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectFade } from "swiper";
import Link from "next/link";

const First = () => {
  return (
    <div className={styles.first}>
      <div className={styles.first__container}>
        <div className={styles.first__body}>
          <div className={styles.banner__block}>
            <Swiper
              effect="fade"
              grabCursor
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              speed={2200}
              autoplay={{ delay: 1800 }}
              modules={[Autoplay]}
              className={styles.swiperFirst}
            >
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.banner__slide}>
                  <div className={styles.banner__slide_content}>
                    <h1>Красочный </h1>
                    <h1>и еще красочней</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.banner__slide_two}>
                  <div className={styles.banner__slide_content_two}>
                    <h1>Лучший</h1>
                    <h1>И еще лучше</h1>
                    <p>Крсовки Li-Ning уже в продаже</p>
                    <Link href="/applewatch">
                      <button className={styles.watch_btn}>Купить</button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.banner__slide_thre}>
                  <div className={styles.banner__slide_content_tre}>
                    <h1>Nike Tech Fleece</h1>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className={styles.banner__product}>
              <div className={styles.banner__product_container}>
                <div className={styles.banner__product_body}>
                  <div className={styles.banner__product_title}>
                    <h1>Товар дня</h1>
                    <div className={styles.card__icon}></div>
                  </div>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    grabCursor
                    autoplay={{ delay: 2500 }}
                    speed={2700}
                    modules={[Autoplay]}
                    className={styles.cardSwiper}
                  >
                    <SwiperSlide>
                      <div className={styles.banner__product_slide}>
                        <Image
                          src="/england.png"
                          alt="Apple-Watch"
                          width={288}
                          height={301}
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className={styles.banner__product_info}>
                    <p>England Men's Nike Full-Zip Tech Fleece Hoodie </p>
                    <Image
                      src="/Image/FirstBlock/reviews.png"
                      alt="Reviews"
                      width={73}
                      height={12}
                    />
                    <div className={styles.product_info_subtitle}>
                      <div>
                        <p>23 340 ₽</p>
                        <h2>11 836 ₽</h2>
                      </div>
                      <div>
                        <Link href="/watch/3">
                          <button>Купить</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className={styles.cotalog}>Каталог</h1>
            <div className={styles.catalog__block}>
              <div className={styles.catalog__card_items}>
                <div className={styles.catalog__card}>
                  <p>Tech Fleece</p>
                  <div>
                    <Link href="/mobil">
                      <Image
                        className={styles.card_img}
                        src="/nike.png"
                        alt="Smartfon"
                        width={203}
                        height={100}
                      />
                    </Link>
                  </div>
                </div>
                <div className={styles.catalog__card}>
                  <p>Socks</p>
                  <div>
                    <Link href="/television">
                      <Image
                        className={styles.card_img}
                        src="/socks.png"
                        alt="Smartfon"
                        width={150}
                        height={120}
                      />
                    </Link>
                  </div>
                </div>
                <div className={styles.catalog__card}>
                  <div>
                    <Link href="/laptop">
                      <p>Luiviton</p>
                    </Link>
                  </div>
                </div>
                <div className={styles.catalog__card}>
                  <p>Puma</p>
                  <div>
                    <Link href="/pods">
                      <Image
                        className={styles.card_img}
                        src="/puma.png"
                        alt="Smartfon"
                        width={223}
                        height={135}
                      />
                    </Link>
                  </div>
                </div>
                <div className={styles.catalog__card}>
                  <p>Polo</p>
                  <div>
                    <Link href="/applewatch">
                      <Image
                        className={styles.card_img}
                        src="/polo.png"
                        alt="Smartfon"
                        width={223}
                        height={155}
                      />
                    </Link>
                  </div>
                </div>
                <div className={styles.catalog__card}>
                  <p>Li-Ning "Wade"</p>
                  <div>
                    <Link href="/ipad">
                      <Image
                        className={styles.card_img}
                        src="/wade.png"
                        alt="Smartfon"
                        width={230}
                        height={130}
                      />
                    </Link>
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

export default First;
