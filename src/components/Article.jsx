import React, {useState} from 'react';
import {Content,Publishbutton, Title} from './index';

const Article = (props) => {
    const [isPublished, setIsPublished] = useState(false)
    const PublishArticle = () => {
        setIsPublished(true)
    }
    return (
        <div>
            <Title title={props.title} />
            <Content content={props.content} />
            <Publishbutton isPublished={isPublished} onClick={PublishArticle}/>
        </div>
    );
};

export default Article;