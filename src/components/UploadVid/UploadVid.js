import videoThumbnail from '../../assets/Images/Upload-video-preview.jpg';
import './UploadVid.scss';

function UploadVid() {
    return (
        
        <section className='upload'>
            <div className="greyLine"></div>
            <h1 className='upload__title'>Upload Video</h1>
            <h2 className="upload__subtitle">Video Thumbnail</h2>
            <div className='upload__div'>
            <img className="upload__img" src={videoThumbnail} alt='biker pedalling'></img>
            </div>
        </section>

    );
}
export default UploadVid;