import './Article.scss';

function Article(props) {
    return (
        <section className='article'>
        <img className='article__img' src={props.image} alt='article' />
        <div className='article__infoBar'>
            <h3 className='article__infoBar--title'>{props.title}</h3>
            <p className='article__infoBar--author'>{props.channel}</p>
        </div>
        </section>
        // <section className='article'>
        // <img className='article__img' src='https://i.imgur.com/l2Xfgpl.jpg' alt='article' />
        // <div className='article__infoBar'>
        //     <h3 className='article__infoBar--title'>Title</h3>
        //     <p className='article__infoBar--author'>Author</p>
        // </div>
        // </section>
        )
    }
    export default Article;