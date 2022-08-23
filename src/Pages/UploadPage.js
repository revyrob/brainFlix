import UploadVid from "../components/UploadVid/UploadVid";
import UploadForm from "../components/UploadForm/UploadForm";
import Button from "../components/Button/Button";
import publish from '../assets/Icons/publish.svg';
function UploadPage() {
    
        return (
            <>
            <UploadVid />
            <UploadForm />
            <Button className="btn__publish" icon={publish} alt="upload" text="PUBLISH" type="submit"/>
            <Button className="btn__cancel" text="CANCEL" type="cancel"/>
            </>
            );
        }
        
        export default UploadPage;