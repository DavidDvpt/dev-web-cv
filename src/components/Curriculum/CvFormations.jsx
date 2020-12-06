import { Col, Row } from "reactstrap";
import CvFormation from "./CvFormation";
import { formationsAndDiplomes } from "../../data/staticData";
import hat from "../../images/graduation-hat.png";

function CvFormations() {
    const formations = formationsAndDiplomes;

    return (
        <Row className="mb-2">
            <Col>
                {" "}
                <h4 className="title titleColLeft col-10">
                    <img src={hat} alt="profil" className="profilIcon" />
                    &nbsp;Formations et diplômes
                </h4>
            </Col>

            {formations.map((f, i) => (
                <CvFormation
                    key={f.nom.concat(i)}
                    formation={f}
                    className="px-3 pb-0"
                />
            ))}
        </Row>
    );
}

export default CvFormations;
