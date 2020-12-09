import { Col, Row } from "reactstrap";
import { experiencesProfessionnelles } from "../../data/staticData";
import CvExperiencePro from "./CvExperiencePro";

import style from "./curriculum.module.scss";
import bureau from "../../images/bureau.png";

function CvExperiencesPro({ className }) {
    return (
        <Row className={className}>
            <Col>
                <h4 className={`${style.title} col-10`}>
                    <img
                        src={bureau}
                        alt="profil"
                        className={style.profilIcon}
                    />
                    Expérience professionnelle
                </h4>
            </Col>
            {experiencesProfessionnelles.map((exp, i) => (
                <CvExperiencePro key={exp.nom.concat(i)} experiencePro={exp} />
            ))}
        </Row>
    );
}

export default CvExperiencesPro;
