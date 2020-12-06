import { Col, Row } from "reactstrap";
import { experiencesProfessionnelles } from "../../data/staticData";
import CvExperiencePro from "./CvExperiencePro";

import bureau from "../../images/bureau.png";

function CvExperiencesPro({ className }) {
    return (
        <Row className={className}>
            <Col>
                <h4 className="title col-10">
                    <img src={bureau} alt="profil" className="profilIcon" />{" "}
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
