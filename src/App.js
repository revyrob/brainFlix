// import logo from './logo.svg';
import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import MainArticle from './components/MainArticle/MainArticle';
import ArticleList from './components/ArticleList/ArticleList';
import Comment from './components/Comment/Comment';
import CommentArea from './components/CommentArea/CommentArea';
//videos for hero
import initialFullVideos from './Data/video-details.json';
//videos for side bar
import videoData from './Data/videos.json';


function App() {
  //useState for videos in side bar
  const [videos, setVideos] = useState(videoData);

  //useState for video in main bar
  const [mainVideo, setMainVideo] = useState(initialFullVideos[0]);
console.log(initialFullVideos[0]);

  // setVideos();
  //event handler on clicking on a video
  

  return (
    <>
    <Header />
    <Hero item={mainVideo}/>
    
    <section className='main'>
      <section className='leftMain'>
    <MainArticle item={mainVideo}/>
    <CommentArea item={mainVideo}/>
    <Comment />
    </section>
    <ArticleList item={videos}/>
    </section>
    </>
  );
}

export default App;
