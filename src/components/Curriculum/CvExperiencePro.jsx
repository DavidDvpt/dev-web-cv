import { Col, Row } from "reactstrap";
import CvContenuExperiencePro from "./CvContenuExperiencePro";

function CvExperiencePro({ experiencePro }) {
    return (
        <Col className="col-12 mb-2">
            <Row>
                <h5 className="col">
                    {experiencePro.date} - {experiencePro.nom}
                </h5>
            </Row>
            <Row className="col">
                <ul className="mb-0">
                    {experiencePro.contenu.map((elmt, i) => {
                        return (
                            <CvContenuExperiencePro
                                key={elmt.projet.concat(i)}
                                elmt={elmt}
                            />
                        );
                    })}
                </ul>
            </Row>
        </Col>
    );
}

export default CvExperiencePro;
