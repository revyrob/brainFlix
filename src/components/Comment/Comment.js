import './Comment.scss';

function Comment(props) {
    
    const newDate = new Date(props.timestamp).toLocaleDateString();
    
    return (
<section className='comment'>

        <div className='comment__wrapper--image'>
        <div className='comment__user-image'></div>
        </div>

        <div className='comment__wrapper'>
        <div className='comment__header'>
        <p className='comment__name'>{props.name}</p>
        <p className='comment__date'>{newDate}</p>
        </div>  
       
        <div className='comment__comment'>{props.comment}</div>  

</div>
</section>
    )
}
    export default Comment;