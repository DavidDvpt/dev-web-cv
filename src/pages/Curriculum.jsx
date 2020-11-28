import { Container } from "reactstrap";
import CompetencesInfo from "../components/CompetencesInfo";
import CvFormations from "../components/CvFormations";
import EnTete from "../components/enTete";
import ExperiencesPro from "../components/ExperiencesPro";
import Profil from "../components/Profil";

function Curriculum() {
    return (
        <Container className="curriculum h-100">
            <EnTete />
            <Container className="d-flex h-100">
                <div className="groupInfos col-6 mt-3">
                    <Profil className="pl-5" />
                    <CvFormations />
                </div>
                <div className="col-6 mt-3">
                    <CompetencesInfo />
                    <ExperiencesPro className="" />
                </div>
            </Container>
        </Container>
    );
}

export default Curriculum;
