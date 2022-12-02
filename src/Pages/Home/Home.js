import React from 'react';
import Advertisement from './Advertisement';
import Banner from './Banner';
import Category from './Category';
import ShowProducts from './ShowProducts';
import SupportSection from './SupportSection';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Advertisement></Advertisement>
            <Category></Category>
            <ShowProducts></ShowProducts>
            <SupportSection></SupportSection>

        </div>
    );
};

export default Home;