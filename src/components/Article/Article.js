import './Article.scss';


function Article({image, title, channel}) {
    return (
        <section className='article'>
            
        <img className='article__img' src={image} alt='article' />
       
        <div className='article__infoBar'>
            <h3 className='article__infoBar--title'>{title}</h3>
            <p className='article__infoBar--author'>{channel}</p>
        </div>
        </section>
        // <section className='article'>
        // <img className='article__img' src='https://i.imgur.com/l2Xfgpl.jpg' alt='article' />
        // <div className='article__infoBar'>
        //     <h3 className='article__info'>Title</h3>
        //     <p className='article__infoBar--author'>Author</p>
        // </div>
        // </section>
        )
    }
    export default Article;