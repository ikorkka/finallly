import React from 'react';
import s from  "./Bank.module.css"
import Footer from '../footer/Footer';
import Header from '../Header/Header';
const Bank = () => {
    return (
        <div className={s.home}>
            <Header/>
        <div className={s.container}>
            <div className={s.bank}>
                <div className={s.master_card}>
                    <img src="/mastercard.jpg" alt="sdfdf" />
                    <p>6589 1234 7895 9010</p>
                </div>
                <div className={s.tinkoff_card}>
                    <img src="/tinof.jpg" alt="dczdczd" />
                    <p>2200 0000 0000 0123</p>
                </div>
                <div className={s.alfa_card}>
                    <img src="/alfa.jpg" alt="asd" />
                    <p>5412 7534 5678 9123</p>
                </div>
                <div className={s.sber_card}>
                    <img src="/sber.jpg" alt="adasd" />
                    <p>1234 5678 9101 1213</p>
                </div>
                <div className={s.btb_card}>
                    <img src="/BTB.jpg" alt="acacs" />
                    <p>5654 6878 3235 7876</p>
                </div>
                <div className={s.gaz_prom }>
                    <img src="gazprom.jpg" alt="adwawd" />
                    <p>3243 4565 3242 4563</p>
                </div>
            </div>

        </div>
        <Footer/>
        </div>
    );
};

export default Bank;