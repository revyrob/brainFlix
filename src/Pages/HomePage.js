import { useState } from 'react';
import Hero from '../components/Hero/Hero';
//videos for hero
import initialFullVideos from '../Data/video-details.json';
import MainArticle from '../components/MainArticle/MainArticle';
import ArticleList from '../components/ArticleList/ArticleList';
import CommentArea from '../components/CommentArea/CommentArea';

function HomePage() {
    //useState for videos in side bar
    const [videos] = useState(initialFullVideos);
    
    //useState for video in main bar
    const [mainVideo, setMainVideo] = useState(initialFullVideos[0]);
    
    //handler for selected article
    const handleVideoSelected = (id) =>{
        const foundVideo = videos.find(vid => vid.id === id);
        setMainVideo(foundVideo);
    }
        
        return (
            <>
            <Hero item={mainVideo}/>
            <section className='main'>
            <section className='leftMain'>
            <MainArticle item={mainVideo}/>
            <CommentArea item={mainVideo}/>
            
            </section>
            <ArticleList 
            item={videos}
            itemMain={mainVideo}
            handler={handleVideoSelected}/>
            </section>
            </>
            );
        }
        
        export default HomePage;