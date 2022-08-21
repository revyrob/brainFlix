import './FormField.scss';
import Button from '../Button/Button';
import commentIcon from '../../assets/Icons/add_comment.svg';

//form field for the mobile divice sine the input and button are in a different order
//compared to the tablet/desktop
function formField() {
    
    return (
        <form method="post" className='formField__wrapper--mobile'>
        <div className='formField__user--div'>
        <div className="formField__user"></div>
        </div>
        <div className='formField__wrapper--input'>
        <div className='formField__action'>
        <textarea type="text" placeholder='Add a new comment' name='comment' className='formField__input'></textarea>
        <Button className="formField__btn" icon={commentIcon} alt="comment" text="COMMENT" type="submit"/>
        </div>
        </div>
        </form>
        
        
        )
    }
    export default formField;