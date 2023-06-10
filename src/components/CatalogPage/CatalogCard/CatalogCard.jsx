import React from "react";
import s from "../Catalog.module.css";
import Link from "next/link";
const CatalogCard = ({title,img,link}) => {
  return (
    <div>
      <div className={s.catalog__card_items}>
        <div className={s.catalog__card}>
          <div className={s.card__cirsle}></div>
          <p>{title}</p>
          <div>
            <img
              src={img}
              alt="Smart"
              width={153}
              height={135}
            />
          </div>
          <Link href={link}>
          Смотреть
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatalogCard;
