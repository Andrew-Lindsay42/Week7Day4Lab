import React from 'react';

const Story = ({story}) => {
    return(
        <li>
        Article: <a href={story.url}>{story.title}</a>
        </li>
    )
};

export default Story;