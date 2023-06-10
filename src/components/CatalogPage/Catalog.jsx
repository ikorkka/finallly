import Link from "next/link";
import s from "./Catalog.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
const Catalog = () => {
  return (
    <div className={s.catalog}>
      <div className={s.catalog__container}>
        <div className={s.catalog__body}>
          <div className={s.catalog__link}></div>
          <div className={s.catalog__title}>
            <h1>Каталог</h1>
          </div>
          <div className={s.catalog__card_items}>
            <motion.div
              className={s.catalog__card}
              layout
              transition={{
                opacity: { ease: "linear" },
                layout: { duration: 0.5 },
                duration: 0.7,
              }}
              initial="hidden"
              // transition={{ duration: 0.6 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
            >
              <div className={s.card__cirsle}></div>
              <p>Tech Fleece</p>
              <div>
                <Link href="/mobil">
                  <Image
                    src="/nike.png"
                    alt="Smartfon"
                    width={203}
                    height={100}
                  />
                </Link>
              </div>
            </motion.div>
            <motion.div
              className={s.catalog__card}
              layout
              transition={{
                opacity: { ease: "linear" },
                layout: { duration: 0.5 },
                duration: 0.7,
              }}
              initial="hidden"
              // transition={{ duration: 0.6 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
            >
              <div className={s.card__cirsle}></div>
              <p>Li-Ning "Wade"</p>
              <div>
                <Link href="/ipad">
                  <Image
                        src="/wade.png"
                        alt="Smartfon"
                        width={230}
                        height={130}
                  />
                </Link>
              </div>
            </motion.div>
            <motion.div
              className={s.catalog__card}
              layout
              transition={{
                opacity: { ease: "linear" },
                layout: { duration: 0.5 },
                duration: 0.7,
              }}
              initial="hidden"
              // transition={{ duration: 0.6 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
            >
              <div className={s.card__cirsle}></div>
              <p>Luiviton</p>
              <div>
                <Link href="/laptop">
                  <Image
                    src="/lvlogo.png"
                    alt="Smartfon"
                    width={125}
                    height={105}
                  />
                </Link>
              </div>
            </motion.div>
            <motion.div
              className={s.catalog__card}
              layout
              transition={{
                opacity: { ease: "linear" },
                layout: { duration: 0.5 },
                duration: 0.7,
              }}
              initial="hidden"
              // transition={{ duration: 0.6 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
            >
              <div className={s.card__cirsle}></div>
              <p>Socks</p>
              <div>
                <Link href="/television">
                  <Image
                    src="/socks.png"
                    alt="Smartfon"
                    width={150}
                    height={120}
                  />
                </Link>
              </div>
            </motion.div>
            <motion.div
              className={s.catalog__card}
              layout
              transition={{
                opacity: { ease: "linear" },
                layout: { duration: 0.5 },
                duration: 0.7,
              }}
              initial="hidden"
              // transition={{ duration: 0.6 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
            >
              <div className={s.card__cirsle}></div>
              <p>Смарт-часы</p>
              <div>
                <Link href="/applewatch">
                  <Image
                        src="/polo.png"
                        alt="Smartfon"
                        width={223}
                        height={155}
                  />
                </Link>
              </div>
            </motion.div>
            <motion.div
              className={s.catalog__card}
              layout
              transition={{
                opacity: { ease: "linear" },
                layout: { duration: 0.5 },
                duration: 0.7,
              }}
              initial="hidden"
              // transition={{ duration: 0.6 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
            >
              <div className={s.card__cirsle}></div>
              <p>Наушники</p>
              <div>
                <Link href="/pods">
                  <Image
                        src="/puma.png"
                        alt="Smartfon"
                        width={223}
                        height={135}
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
