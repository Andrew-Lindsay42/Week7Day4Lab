import React from 'react';
import Story from './Story';


const TopStoriesList = ({storyList}) => {

    const stories = storyList.map((story, index) => {
        return(
            <li>
                <Story story = {story} key = {index}/>
            </li>
        )
    })

    return (
        <>
            <ul>
                {stories}
            </ul>
        </>
    );
    
};

export default TopStoriesList;