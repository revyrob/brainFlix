import './CommentArea.scss';
import Comment from '../Comment/Comment';
import FormFieldTablet from '../FormField/FormFieldTablet';
import FormField from '../FormField/FormField';


function CommentArea({item}) {
    
    return (
        <section className='commentArea'>
        <p className='commentArea__numberComments'>
        {item.comments.length} Comments
        </p>
        <h2 className='commentArea__title'>
        Join the Conversation
        </h2>
        <FormField className="mobile"/>
        <FormFieldTablet className="tablet"/>

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