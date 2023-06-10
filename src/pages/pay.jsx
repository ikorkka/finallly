import Header from '@/components/Header/Header';
import PaymentForm from '@/components/PayForm/PayForm';
import Footer from '@/components/footer/Footer';
import React from 'react';

const pay = () => {
    return (
        <div>
            <Header/>
            <PaymentForm/>
            <Footer/>
        </div>
    );
};

export default pay;