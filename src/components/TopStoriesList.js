import React from 'react';
import Story from './Story';


const TopStoriesList = ({storyList, search}) => {

    const stories = storyList.map((story, index) => {
        if (story.title.toUpperCase().includes(search.toUpperCase())){
        return(
                <Story story = {story} key = {index}/>
        )
        }
    }
    )

    return (
        <>
            <ul>
                {stories}
            </ul>
        </>
    );
    
};

export default TopStoriesList;