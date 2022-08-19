import Button from '../Button/Button';
import './CommentArea.scss';
import commentIcon from '../../assets/Icons/add_comment.svg';
import Comment from '../Comment/Comment';
import InputBar from '../InputBar/InputBar';
import user from '../../assets/Images/Mohan-muruge.jpg';

function CommentArea({item}) {
    
    return (
        <section className='commentArea'>
        <p className='commentArea__numberComments'>
        {item.comments.length} Comments
        </p>
        <div className='commentArea__wrapper'>
        
        <div className='commentArea__user--div'>
        <img src={user} className="commentArea__user" alt="user"/>
        </div>
        <div className='commentArea__wrapper--input'>
        <h2 className='commentArea__title'>
        Join the Conversation
        </h2>
        <div className='commentArea__action'>
        <InputBar className='commentArea__input' placeholder="Add a new comment" name="comment"/>
        <Button className="commentArea__btn" icon={commentIcon} alt="comment" text="COMMENT"/>
        </div>
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