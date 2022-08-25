import UploadVid from "../components/UploadVid/UploadVid";
import UploadForm from "../components/UploadForm/UploadForm";
import UploadHeader from "../components/UploadHeader/UploadHeader";

function UploadPage() {
    
    return (
        <section className="uploadPage">
        <UploadHeader />
        <div className="uploadPage--div">
        <UploadVid />
        <UploadForm/>
        </div>
        </section>
        );
    }
    
    export default UploadPage;