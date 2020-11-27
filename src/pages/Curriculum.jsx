import { Container } from "reactstrap";
import CvFormations from "../components/CvFormations";
import EnTete from "../components/enTete";
import ExperiencesPro from "../components/ExperiencesPro";
import Profil from "../components/Profil";

function Curriculum() {
    return (
        <Container className="curriculum h-100">
            <EnTete />
            <Container className="h-100">
                <div className="groupInfos col-6 mt-3">
                    <Profil className="pl-5" />
                    <CvFormations />
                </div>
                <ExperiencesPro className="col-6 h100 mt-3"></ExperiencesPro>
            </Container>
        </Container>
    );
}

export default Curriculum;
