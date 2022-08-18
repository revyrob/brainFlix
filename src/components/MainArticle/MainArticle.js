import './MainArticle.scss';
import views from '../../assets/Icons/views.svg';
import likes from '../../assets/Icons/likes.svg';

function MainArticle({item}) {
    const newDate = new Date(item.timestamp).toLocaleDateString();
    console.log(newDate);
    return (
        <section className='mainArticle'>
        <h1 className='mainArticle__title'>{item.title}</h1>
        <div className='mainArticle__infoBar'>
        <div className='mainArticle__div--left'>
        <h2 className='mainArticle__infoBar--author'>{item.channel}</h2>
        <p className='mainArticle__infoBar--date'>{newDate}</p>
        </div>
        <div className='mainArticle__div--right'>
        <div className='mainArticle__div'>
        <img className='mainArticle__infoBar--icon' src={views} alt='view icon'/><p className='mainArticle__infoBar--views'>{item.views}</p>
        </div>
        <div className='mainArticle__div'>
        <img className='mainArticle__infoBar--icon' src={likes} alt='view icon'/><p className='mainArticle__infoBar--likes'> {item.likes}</p></div>
        </div>
        </div>
        <div className='mainArticle__article'>
        {item.description}
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