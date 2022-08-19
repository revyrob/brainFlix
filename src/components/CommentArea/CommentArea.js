import './CommentArea.scss';
import Comment from '../Comment/Comment';
import CommentInput from '../CommentInput/CommentInput';
import CommentInputTablet from '../CommentInput/CommentInputTablet';



function CommentArea({item}) {
    
    return (
        <section className='commentArea'>
        <p className='commentArea__numberComments'>
        {item.comments.length} Comments
        </p>
        <CommentInput/>
        <CommentInputTablet/>

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