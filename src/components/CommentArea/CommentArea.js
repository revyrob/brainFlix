import Button from '../Button/Button';
import './CommentArea.scss';
import commentIcon from '../../assets/Icons/add_comment.svg';
import user from '../../assets/Images/Mohan-muruge.jpg';
import Comment from '../Comment/Comment';

function CommentArea({item}) {
    // const commentLength = length - 1;
    return (
        <section className='commentArea'>
        <p className='commentArea__numberComments'>
            {/* how to minus one in the length */}
        {item.comments.length} Comments
        </p>
        <div className='commentArea__wrapper'>
        <div className='commentArea__wrapper--image'>
        <div className='commentArea__user-image'>
        <img className='commentArea__user-user' src={user} alt="user" />
        </div>
        <div className='commentArea__wrapper--input'>
        <h2 className='commentArea__title'>
        Join the Conversation
        </h2>
        <div className='commentArea__input--input'>
        <input className='commentArea__input' placeholder="Add a new comment" type='text' name="comment"></input>
        </div>
        </div>
        <Button className="commentArea__btn" icon={commentIcon} alt="comment icon" text="COMMENT"/>
        </div>
        </div>
        {item.comments.map((user, index) =>
            <Comment
            key = {index}
            name = {user.name}
            comment = {user.comment}
            likes = {user.likes}
            timestamp = {user.timestamp}
            />
            )}
        </section>
        
        )
    }
    export default CommentArea;