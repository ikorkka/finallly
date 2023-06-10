import React, { useRef, useState } from "react";
import Link from "next/link";
import s from "./Header.module.css";
import Image from "next/image";

const Header = () => {
  const searchRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const handleSearch = () => {
    const searchText = searchRef.current.value;
    const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a");

    for (let i = 0; i < headers.length; i++) {
      const headerText = headers[i].textContent.toLowerCase();

      if (headerText.includes(searchText.toLowerCase())) {
        headers[i].scrollIntoView({ behavior: "smooth", block: "center" });
        setHighlightedIndex(i);
        break;
      }
    }

    setSearchValue("");
  };

  const renderSearchText = (text) => {
    if (
      highlightedIndex >= 0 &&
      text.toLowerCase().includes(searchValue.toLowerCase())
    ) {
      const startIndex = text.toLowerCase().indexOf(searchValue.toLowerCase());
      const endIndex = startIndex + searchValue.length;

      return (
        <>
          {text.substring(0, startIndex)}
          <mark>{text.substring(startIndex, endIndex)}</mark>
          {text.substring(endIndex)}
        </>
      );
    }

    return text;
  };

  return (
    <>
      <header className={s.aboveHeader}>
        <div className={s.aboveHeader__container}>
          <div className={s.aboveHeader_body}>
            <div className={s.aboveHeader__location}>
              <Link href="/contact">
                <p>Тц Абай, г.Бишкек, ул.Исанова ,115/1</p>
              </Link>
            </div>
            <nav className={s.aboveHeader_title}>
              <ul className={s.aboveHeader_title_li}>
                <li>
                  <Link className={s.aboveHeader_description} href="/delivery">
                    Доставка и оплата
                  </Link>
                </li>
                <li>
                  <Link href="/obmen" className={s.aboveHeader_description}>
                    Обмен и возврат
                  </Link>
                </li>
                <li>
                  <Link href="/servis" className={s.aboveHeader_description}>
                    Гарантия и сервис
                  </Link>
                </li>
                <li>
                  <Link className={s.aboveHeader_description} href="/contact">
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <header className={s.header}>
        <div className={s.header__container}>
          <div className={s.header__body}>
            <div className={s.header_logo}>
              <Link href="/">
                <Image
                  href="/home"
                  src="/logoo.png"
                  alt="logotip-GorbushkaMoscow"
                  width={118}
                  height={118}
                />
              </Link>
            </div>
            <div className={s.header__content}>
              <div className={s.header_all}>
              <div className={s.header_input}>
        <input
          type="text"
          placeholder="Поиск"
          ref={searchRef}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={handleSearch}>Найти</button>
      </div>
                <div className={s.social}>{/* Социальные ссылки */}</div>
                <div className={s.header_connection}>
                  <svg
                    className={s.header__phoneLogo}
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 2.85714C0 2.23199 0.248341 1.63244 0.690391 1.19039C1.13244 0.748341 1.73199 0.5 2.35714 0.5H3.43514C4.11086 0.5 4.70014 0.960429 4.86436 1.61571L5.73257 5.09093C5.80293 5.37221 5.78872 5.668 5.69172 5.94125C5.59472 6.21449 5.41925 6.45304 5.18729 6.627L4.17136 7.38914C4.06529 7.4685 4.0425 7.58479 4.07236 7.66571C4.5158 8.87167 5.21604 9.96684 6.1246 10.8754C7.03316 11.784 8.12833 12.4842 9.33429 12.9276C9.41521 12.9575 9.53071 12.9347 9.61086 12.8286L10.373 11.8127C10.547 11.5808 10.7855 11.4053 11.0588 11.3083C11.332 11.2113 11.6278 11.1971 11.9091 11.2674L15.3843 12.1356C16.0396 12.2999 16.5 12.8891 16.5 13.5656V14.6429C16.5 15.268 16.2517 15.8676 15.8096 16.3096C15.3676 16.7517 14.768 17 14.1429 17H12.375C5.54086 17 0 11.4591 0 4.625V2.85714Z"
                      fill="#3E4D31"
                    />
                  </svg>
                  <h4>+996 (556) 04-20-20</h4>
                </div>
              </div>
              <div className={s.header_down}>
                <Link href="/catalog" className={s.catalog}>
                  Каталог
                </Link>
                <Link href="/mobil" className={s.iphone}>
                  Tech Flece
                </Link>
                <Link href="/television" className={s.watch}>
                  Socks
                </Link>
                <Link href="/laptop" className={s.appletv}>
                  LV
                </Link>
                <Link href="/delivery" className={s.macbook}>
                  Заказать
                </Link>
                <Link href="/login" className={s.ipad}>
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
