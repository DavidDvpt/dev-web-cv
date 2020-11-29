import { Row } from "reactstrap";
import CvFormation from "./CvFormation";
import { formationsAndDiplomes } from "../../data/staticData";
import hat from "../../images/graduation-hat.png";

function CvFormations() {
    const formations = formationsAndDiplomes;

    return (
        <Row className="">
            <h4 className="titleColLeft col-8">
                <img src={hat} alt="profil" className="profilIcon" />
                &nbsp;Formations et diplômes
            </h4>
            {formations.map((f) => (
                <CvFormation formation={f} className="pl-5" />
            ))}
        </Row>
    );
}

export default CvFormations;
