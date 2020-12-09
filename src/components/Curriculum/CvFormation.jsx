import { Col, Row } from "reactstrap";

function CvFormation({ formation, className }) {
    return (
        <Col className={`${className} col-12 mb-2`}>
            <Row>
                <h5>
                    {formation.date} - {formation.nom}
                </h5>
            </Row>
            <Row className="pl-4">
                {formation.ecole} - {formation.lieu}
            </Row>
        </Col>
    );
}

export default CvFormation;
