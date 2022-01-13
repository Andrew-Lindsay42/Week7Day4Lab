import React, {useEffect} from 'react';
import Story from './Story';


const TopStoriesList = ({storyList}) => {

    const stories = storyList.map((story, index) => {
        return(
                <Story story = {story} key = {index}/>
        )
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