import './CommentInput.scss';
import InputBar from '../InputBar/InputBar';
import Button from '../Button/Button';
import commentIcon from '../../assets/Icons/add_comment.svg';




function CommentInputTablet() {
    
    return (
        <div className='commentArea__wrapper--tablet'>
            <div className='commentArea__user--div'>
                <div className="commentArea__user"></div>
            </div>
            <div className='commentArea__wrapper--input'>
                <h2 className='commentArea__title'>
                Join the Conversation
                </h2>
                <div className='commentArea__action'>
                    <InputBar className='commentArea__input' placeholder="Add a new comment" name="comment" />
                </div>
            </div>
            <Button className="commentArea__btn" icon={commentIcon} alt="comment" text="COMMENT" type="submit"/>
        </div>
        
        )
    }
    export default CommentInputTablet;