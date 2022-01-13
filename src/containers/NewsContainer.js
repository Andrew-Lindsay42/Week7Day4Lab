import React from 'react';
import FilterBox from '../components/FilterBox';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TopStoriesList from '../components/TopStoriesList';

const NewsContainer = () => {
    return(
        <>
        <h1>This is the News Container</h1>
        <Header/>
        <FilterBox/>
        <TopStoriesList/>
        <Footer/>
        </>
    )
};

export default NewsContainer;