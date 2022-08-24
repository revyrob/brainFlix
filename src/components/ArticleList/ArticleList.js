import './ArticleList.scss';
import Article from '../Article/Article';

import axios from 'axios';
import { useEffect, useState } from 'react';


//articles are generated here through the json file provided
//they are filter with comparing the list and which one is being shown in the mainArticle
function ArticleList({itemMain, url}) {

    const [videos, setVideos] = useState(null);
    
    useEffect(() =>{
        axios
        .get(url)
        .then((response) => {
        setVideos(response.data);
        console.log(response);
    })
    .catch((err) => console.log(err));
}, [url]);

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