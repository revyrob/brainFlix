import './ArticleList.scss';
import Article from '../Article/Article';

import axios from 'axios';
import { useEffect, useState } from 'react';


//articles are generated here through the json file provided
//they are filter with comparing the list and which one is being shown in the mainArticle
function ArticleList({itemMain}) {

    const [videos, setVideos] = useState(null);
    
    useEffect(() =>{
        axios
        .get('https://project-2-api.herokuapp.com/videos?api_key=be97841f-2e0f-41ab-8584-cf3c3e4b26a9/videos')
        .then((response) => {
        setVideos(response.data);
    })
    .catch((err) => console.log(err));
}, []);

    useEffect(() => {
        setVideos();
    }, []);
    
    return (
        <section className='articleList'>
            <h2 className='articleList__title'>NEXT VIDOES</h2>
            {videos && videos
            .filter((vid) => vid.id !== itemMain.id)
            .map(vid => 
            <Article 
            id = {vid.id}
            key={vid.id} 
            title = {vid.title}
            channel = {vid.channel}
            image = {vid.image}
            />
            )}
        </section>
        )
    }
    export default ArticleList;