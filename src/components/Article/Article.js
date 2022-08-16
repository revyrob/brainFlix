import './Article.scss';

function Article(props) {
    return (
        // <section className='article'>
        // <img className='article__img' src={props.img} alt='' />
        // <div className='article__infoBar'>
        // <h3 className='article__title'>{props.title}</h3>
        // <p className='article__author'>{props.author}</p>
        // </div>
        <section className='article'>
        <img className='article__img' src='https://i.imgur.com/l2Xfgpl.jpg' alt='article' />
        <div className='article__infoBar'>
            <h3 className='article__infoBar--title'>Become A Travel Pro In 
One Easy Lesson</h3>
            <p className='article__infoBar--author'>Todd Welch
</p>
        </div>

        </section>
        )
    }
    export default Article;