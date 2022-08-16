import './ArticleList.scss';
import Article from '../Article/Article';

function ArticleList(props) {
    return (
        <section className='articleList'>
            <h2 className='articleList__title'>NEXT VIDOES</h2>
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        </section>
        )
    }
    export default ArticleList;