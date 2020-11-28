import { Container } from "reactstrap";
import CompetencesInfo from "../components/CompetencesInfo";
import CvFormations from "../components/CvFormations";
import EnTete from "../components/enTete";
import CvExperiencesPro from "../components/CvExperiencesPro";
import Profil from "../components/Profil";
import Langues from "../components/Langues";
import Interets from "../components/Interets";
import CvAutre from "../components/CvAutre";

function Curriculum() {
    return (
        <Container className="curriculum h-100">
            <EnTete />
            <Container className="d-flex h-100">
                <div className="groupInfos col-6 mt-3">
                    <Profil className="pl-5" />
                    <CvFormations />
                    <Langues />
                    <Interets />
                    <CvAutre />
                </div>
                <div className="col-6 mt-3">
                    <CompetencesInfo />
                    <CvExperiencesPro className="" />
                </div>
            </Container>
        </Container>
    );
}

export default Curriculum;
