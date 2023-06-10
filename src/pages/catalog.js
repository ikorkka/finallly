import Catalog from '@/components/CatalogPage/Catalog';
import Header from '@/components/Header/Header';
import Footer from '@/components/footer/Footer';
import React from 'react';

const catalog = () => {
    return (
        <div>
            <Header/>
            <Catalog/>
            <Footer/>
        </div>
    );
};

export default catalog;