import Button from '../Button/Button';
import './CommentArea.scss';
import commentIcon from '../../assets/Icons/add_comment.svg';
import Comment from '../Comment/Comment';
import InputBar from '../InputBar/InputBar';
function CommentArea({item}) {
    // const commentLength = length - 1;
    return (
        <section className='commentArea'>
        <p className='commentArea__numberComments'>
        
        {item.comments.length} Comments
        </p>
        <div className='commentArea__wrapper'>
        
        <div className='commentArea__user-image'>
        <img className='commentArea__user'/>
        </div>
        <div className='commentArea__wrapper--input'>
        <h2 className='commentArea__title'>
        Join the Conversation
        </h2>
        <InputBar className='commentArea__input' placeholder="Add a new comment" name="comment"/>
        </div>
        <div className='commentArea__btn--div'>
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