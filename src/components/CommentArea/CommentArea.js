import Button from '../Button/Button';
import './CommentArea.scss';
import commentIcon from '../../assets/Icons/add_comment.svg';
import user from '../../assets/Images/Mohan-muruge.jpg';
import Comment from '../Comment/Comment';

function CommentArea(props) {
    return (
        <section className='commentArea'>
        <p className='commentArea__numberComments'>
        {props.item.comments.length} Comments
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
        <input className='commentArea__input' placeholder="Add a new comment" type='text' name="comment"></input>
        </div>
        <Button className="commentArea__btn" icon={commentIcon} alt="comment icon" text="COMMENT"/>
        </div>
        </div>
        {props.item.comments.map((user) =>
            <Comment
            name = {user.name}
            comment = {user.comment}
            likes = {user.likes}
            date = {user.timestamp}
            />
            )}
        </section>
        
        )
    }
    export default CommentArea;