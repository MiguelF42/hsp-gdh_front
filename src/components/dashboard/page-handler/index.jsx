import Home from "../home";
import Prescription from "../prescription";
import MedicalFile from "../medical-file";
import Appointment from "../appointment";

function PageHandler({page}) {
    switch (page) {
        case "home":
            return <Home />;
        case "prescription":
            return <Prescription />;
        case "medical-file":
            return <MedicalFile />;
        case "appointment":
            return <Appointment />;
        default:
            return <Home />;
    }
    
}

export default PageHandler;