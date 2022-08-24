import { useState, useEffect } from 'react';
// import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import Hero from '../components/Hero/Hero';
//videos for hero
import initialVid from '../Data/video-details.json';
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
    const [mainVideo, setMainVideo] = useState(initialVid[0]);
    
    //use Params for videoId and console log to see what the useParams are
    const {videoId} = useParams();
    
    //api with apiKey
    const urlVids = `https://project-2-api.herokuapp.com/videos?api_key=be97841f-2e0f-41ab-8584-cf3c3e4b26a9/videos/`;
   
    useEffect(() => {
        //i get the videoId
        console.log('videoId', videoId);
        if(videoId !== undefined){
                    axios
                    .get(`${urlVids}${videoId}`)
                    .then((response) => {
                        setMainVideo(response.data);
                        console.log(response.data);
                    })
                    .catch((err) => console.log(err));
                };
            }, [videoId]);
    
    //do I need to go to each page and add the <Link> or can I do
    //it in the return around all the factors?
    //it isn't working since I am only still grabbing the small
    //json and there are no comments on it therefore 
    //no comment length
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
        url={urlVids}
        itemMain={mainVideo}
        />
    </section>
    </>
    );
}

export default HomePage;