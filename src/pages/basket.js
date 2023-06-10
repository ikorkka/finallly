import Basket from '@/components/Basket/Basket';
import Header from '@/components/Header/Header';
import Footer from '@/components/footer/Footer';
import React from 'react';

const basket = () => {
    return (
        <div>
            <Header/>
            <Basket/>   
            <Footer/>
        </div>
    );
};

export default basket;