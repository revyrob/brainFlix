import './MainArticle.scss';
import views from '../../assets/Icons/views.svg';
import likes from '../../assets/Icons/likes.svg';

function MainArticle(props) {
    return (
        <section className='mainArticle'>
        <h1 className='mainArticle__title'>{props.item[0].title}</h1>
        <div className='mainArticle__infoBar'>
            <h2 className='mainArticle__infoBar--author'>{props.item[0].channel}</h2>
            <p className='mainArticle__infoBar--date'>{props.item[0].timestamp}</p>
            <p className='mainArticle__infoBar--views'><img src={views} alt='view icon'/>{props.item[0].views}</p>
            <p className='mainArticle__infoBar--likes'><img src={likes} alt='view icon'/>{props.item[0].likes}</p>
        </div>
        <div className='mainArticle__article'>
            {props.item[0].description}
        </div>
        </section>
//         <section className='mainArticle'>
//         <h1 className='mainArticle__title'>Title</h1>
//         <div className='mainArticle__infoBar'>
//             <div className='mainArticle__infoBar__div'>
//             <h2 className='mainArticle__infoBar--author'>By Author Author</h2>
//             <p className='mainArticle__infoBar--date'>8/09/2022</p>
//             </div>
//             <div className='mainArticle__infoBar__div'>
//             <p className='mainArticle__infoBar--views'><img src={views} alt='view icon'/>123,890</p>
//             <p className='mainArticle__infoBar--likes'><img src={likes} alt='view icon'/>105</p>
//             </div>
//         </div>
//         <div className='mainArticle__article'>
//         On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible 
// on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature 
// only allowed for one full run before the conditions made it impossible to ride, that was all that was needed 
// for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow 
// Rampage title
//         </div>
//         </section>
        )
    }
    export default MainArticle;