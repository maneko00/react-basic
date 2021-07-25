import {useState} from 'react';
// import React, { useState } from 'react';
import {Content, Title} from './index';

const Article = (props) => {
    const [isPublished, setIsPublished] = useState(false)
    console.log(isPublished)

    return (
        <div>
            <Title title={props.title} />
            <Content content={props.content} />
            <button onClick={() => setIsPublished(true)}>公開</button>
        </div>
    );
};

export default Article;