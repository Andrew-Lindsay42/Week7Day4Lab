import React from 'react';

const Story = ({story}) => {
    return(
        <>
        <a href={story.url}>{story.title}</a>
        </>
    )
};

export default Story;