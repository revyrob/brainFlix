import './Comment.scss';

function Comment(props) {
    return (
<section className='comment'>
    <h2 className='comment__title'>
        Join the Conversation
    </h2>
    <div className='comment__wrapper'>
        <div className='comment__user-imgage'>
            <div className='comment__user-user'></div>
        </div>
        <input className='comment__input' placeholder="Add a new comment" type='text' name="comment"></input>
    </div>
</section>

    )
}
    export default Comment;