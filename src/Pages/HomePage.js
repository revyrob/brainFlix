import { useState, useEffect } from 'react';
// import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import Hero from '../components/Hero/Hero';
//videos for hero
// import initialVid from '../Data/video-details.json';
import MainArticle from '../components/MainArticle/MainArticle';
import ArticleList from '../components/ArticleList/ArticleList';
import CommentArea from '../components/CommentArea/CommentArea';
import { useParams } from 'react-router-dom';

/*
*On the homepage you have a click handler with the list videos
*where when you click on the list videos it uses a Link
*it puts the video main and the key in the url
*/
function HomePage() {

    //useState for video in main bar
    const [mainVideo, setMainVideo] = useState();
    
    //use Params for videoId and console log to see what the useParams are
    const { videoId } = useParams();
    // console.log(videoId);

    //get
    useEffect(()=> {
        if(videoId !== undefined) {
        axios
        .get(`https://project-2-api.herokuapp.com/videos?api_key=be97841f-2e0f-41ab-8584-cf3c3e4b26a9/videos/${videoId}`)
        .then((response) => {
            setMainVideo(response.data);
        })
        .catch((err) => console.log(err));
        }
        }, [videoId]);

    useEffect(() => {
    setMainVideo();
    }, []);
        
        return (
            <>
            <Hero item={mainVideo}/>
            <section className='main'>
            <section className='leftMain'>
            <MainArticle item={mainVideo}/>
            <CommentArea item={mainVideo}/>
            
            </section>
            <ArticleList 
            // item={videos}
            itemMain={mainVideo}
            />
            </section>
            </>
            );
        }
        
        export default HomePage;