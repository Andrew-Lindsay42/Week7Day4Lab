import React, {useEffect, useState} from 'react';
import FilterBox from '../components/FilterBox';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TopStoriesList from '../components/TopStoriesList';

const NewsContainer = () => {

    const [urlList, seturlList] = useState([]);

    const getAllURLS = function(){
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(response => response.json())
        .then(urls => seturlList(urls))}

    useEffect(() => {
        getAllURLS();
        getDetails(urlList);
      }, [])

    const getDetails = function(urlList){
        let storyList = []
        for (let url of urlList){
            let promise = fetch(`https://hacker-news.firebaseio.com/v0/item/${url}.json`).then(response => response.json)
            storyList.push(promise)
        }
        
        Promise.all(storyList)
        .then(values => console.log(values))
    }


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