import React, {useEffect, useState} from 'react';
import FilterBox from '../components/FilterBox';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TopStoriesList from '../components/TopStoriesList';

const NewsContainer = () => {

    const [urlList, seturlList] = useState([]);
    const [storyList, setStoryList] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        getAllURLS();
    }, [])

    const getAllURLS = function(){
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(response => response.json())
        .then(urls => seturlList(urls))
    };

    useEffect(() => {
        let result = urlList.slice(0,13);
        getStories(result);
    }, [urlList])

    const getStories = function(result){

        let tempList = []

        Promise.all(
            result.map(url => fetch(`https://hacker-news.firebaseio.com/v0/item/${url}.json`).then(response => response.json())
            .then(value => tempList.push(value))))
            .finally(() => setStoryList(tempList))
    }

    return(
        <div className='main-container'>
        <Header/>
        <FilterBox setSearch={setSearch}/>
        <TopStoriesList storyList={storyList} search = {search}/>
        <Footer/>
        </div>
    )
};

export default NewsContainer;