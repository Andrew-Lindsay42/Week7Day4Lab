import React, {useEffect, useState} from 'react';
import FilterBox from '../components/FilterBox';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TopStoriesList from '../components/TopStoriesList';

const NewsContainer = () => {

    const url = 'https://hacker-news.firebaseio.com/v0/topstories.json'

    const [urlList, seturlList] = useState([]);

    const getAllURLS = function(){fetch(url)
    .then(response => response.json())
    .then(urls => seturlList(urls))}

    useEffect(() => {
        getAllURLS();
      }, [])

    console.log(urlList.slice(0, 20));

    return(
        <>
        <h1>This is the News Container</h1>
        {/* <Header/>
        <FilterBox/>
        <TopStoriesList/>
        <Footer/> */}
        </>
    )
};

export default NewsContainer;