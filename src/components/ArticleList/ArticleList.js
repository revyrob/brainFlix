import './ArticleList.scss';
import Article from '../Article/Article';

//articles are generated here through the json file provided
//they are filter with comparing the list and which one is being shown in the mainArticle
function ArticleList({item, itemMain, handler}) {
    return (
        <section className='articleList'>
            <h2 className='articleList__title'>NEXT VIDOES</h2>
            {item
            .filter((vid) => vid.id !== itemMain.id)
            .map(vid => 
            <Article 
            id = {vid.id}
            key={vid.id} handler = {handler}
            title = {vid.title}
            channel = {vid.channel}
            image = {vid.image}
            />
            )}
        </section>
        )
    }
    export default ArticleList;