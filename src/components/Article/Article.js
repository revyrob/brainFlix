import './Article.scss';

//use the onclick function in the article component and not ArticleList because the articles are the onclick events
function Article({image, title, channel, handler, id}) {
    return (
        <article onClick={() => handler(id)} className='article'>
        <div className='article__img--div'>
        <img className='article__img' src={image} alt={title} />
        </div>
        <div className='article__infoBar'>
        <h3 className='article__infoBar--title'>{title}</h3>
        <p className='article__infoBar--author'>{channel}</p>
        </div>
        </article>
        
        )
    }
    export default Article;