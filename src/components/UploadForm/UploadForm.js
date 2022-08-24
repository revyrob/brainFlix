import './UploadForm.scss';
import Button from '../Button/Button';
import publish from '../../assets/Icons/publish.svg';

function UploadForm () {
    return (
        <form method="post" className='uploadForm'>
        <label className='uploadForm__label'>Title your video
        <input type="text" placeholder='Add a title to your video' name='title' className='uploadForm__input'></input>
        </label>
        <label className='uploadForm__label'>Add a video description
        <textarea type="text" placeholder='Add a description to your video' name='description' className='uploadForm__textarea'></textarea>
        </label>
        <Button className="uploadForm__btn--publish" icon={publish} alt="upload" text="PUBLISH" type="submit"/>
        <Button className="uploadForm__btn--cancel" text="CANCEL" type="cancel"/>
        </form>
        
        );
        
    }
    export default UploadForm;