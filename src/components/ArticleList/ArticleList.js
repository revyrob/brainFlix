import './ArticleList.scss';
import Article from '../Article/Article';

function ArticleList(props) {
    console.log(props.item);
    return (
        <section className='articleList'>
            <h2 className='articleList__title'>NEXT VIDOES</h2>
            {props.item.map((vid) =>
            <Article
            key = {vid.id}
            title = {vid.title}
            channel = {vid.channel}
            image = {vid.image}
            />
            )}
        </section>
        )
    }
    export default ArticleList;