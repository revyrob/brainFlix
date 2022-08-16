// import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import MainArticle from './components/MainArticle/MainArticle';
import ArticleList from './components/ArticleList/ArticleList';
import Comment from './components/Comment/Comment';



function App() {
  return (
    <>
    <Header />
    <Hero />
    <section className='main'>
      <section className='leftMain'>
    <MainArticle />
    <Comment />
    </section>
    <ArticleList />
    </section>
    </>
  );
}

export default App;
