import './MainArticle.scss';
import views from '../../assets/Icons/views.svg';
import likes from '../../assets/Icons/likes.svg';

function MainArticle(props) {
    return (
        // <section className='mainArticle'>
        // <h1 className='mainArticle__title'>{props.title}</h1>
        // <div className='mainArticle__infoBar'>
        //     <h2 className='mainArticle__infoBar--author'>{props.author}</h2>
        //     <p className='mainArticle__infoBar--date'>{props.date}</p>
        //     <p className='mainArticle__infoBar--views'>{props.views}</p>
        //     <p className='mainArticle__infoBar--likes'>{props.likes}</p>
        // </div>
        // <div className='mainArticle__article'>
        //     {props.article}
        // </div>
        // </section>
        <section className='mainArticle'>
        <h1 className='mainArticle__title'>Title</h1>
        <div className='mainArticle__infoBar'>
            <div className='mainArticle__infoBar__div'>
            <h2 className='mainArticle__infoBar--author'>By Author Author</h2>
            <p className='mainArticle__infoBar--date'>8/09/2022</p>
            </div>
            <div className='mainArticle__infoBar__div'>
            <p className='mainArticle__infoBar--views'><img src={views} alt='view icon'/>123,890</p>
            <p className='mainArticle__infoBar--likes'><img src={likes} alt='like icon'/>105</p>
            </div>
        </div>
        <div className='mainArticle__article'>
        On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible 
on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature 
only allowed for one full run before the conditions made it impossible to ride, that was all that was needed 
for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow 
Rampage title
        </div>
        </section>
        )
    }
    export default MainArticle;