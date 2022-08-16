// import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import MainArticle from './components/MainArticle/MainArticle';
import ArticleList from './components/ArticleList/ArticleList';



function App() {
  return (
    <>
    <Header />
    <Hero />
    <section className='main'>
    <MainArticle />
    <ArticleList />
    </section>
    </>
  );
}

export default App;
