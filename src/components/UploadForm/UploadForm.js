import './UploadForm.scss';

function UploadForm () {
    return (
        <form method="post" className='uploadForm'>
        <label className='uploadForm__label'>Title your video
        <input type="text" placeholder='Add a title to your video' name='title' className='uploadForm__input'></input>
        </label>
        <label className='uploadForm__label'>Add a video description
        <textarea type="text" placeholder='Add a description to your video' name='description' className='uploadForm__textarea'></textarea>
        </label>
        </form>
        
        );
        
    }
    export default UploadForm;