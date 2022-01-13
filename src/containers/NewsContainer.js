import React, {useEffect, useState} from 'react';
import FilterBox from '../components/FilterBox';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TopStoriesList from '../components/TopStoriesList';

const NewsContainer = () => {

    const [urlList, seturlList] = useState([]);
    const [storyList, setStoryList] = useState([]);

    const getAllURLS = function(){
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(response => response.json())
        .then(urls => seturlList(urls))
    };

    const getStories = function(result){

        let tempList = []

        Promise.all(
            result.map(url => fetch(`https://hacker-news.firebaseio.com/v0/item/${url}.json`).then(response => response.json())
            .then(value => tempList.push(value))
            .then(() => setStoryList(tempList))))
    }

    useEffect(() => {
        getAllURLS();
    }, [])

    useEffect(() => {
        let result = urlList.slice(0,10);
        getStories(result);
    }, [urlList])

    return(
        <>
        <h1>This is the News Container</h1>
        {/* <Header/>
        <FilterBox/>
        <TopStoriesList storyList={storylist}/>
        <Footer/> */}
        </>
    )
};

export default NewsContainer;