import { Col, Row } from "reactstrap";
import { experiencesProfessionnelles } from "../../data/staticData";
import CvExperiencePro from "./CvExperiencePro";

import question from "../../images/question.png";

function CvExperiencesPro({ className }) {
    return (
        <Row className={className}>
            <Col>
                <h4 className="titleColRight col-10">
                    <img src={question} alt="profil" className="profilIcon" />{" "}
                    Expérience professionnelle
                </h4>
            </Col>
            {experiencesProfessionnelles.map((exp) => (
                <CvExperiencePro experiencePro={exp} />
            ))}
        </Row>
    );
}

export default CvExperiencesPro;
