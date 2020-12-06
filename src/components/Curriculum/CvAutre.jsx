import { Col, Row } from "reactstrap";

import question from "../../images/question.png";

function CvAutre() {
    return (
        <Row className="mb-2">
            <Col>
                <h4 className="title titleColLeft col-10">
                    <img src={question} alt="profil" className="profilIcon" />{" "}
                    Autre
                </h4>
            </Col>
            <p className="col-12">Reconnaissance RQTH</p>
        </Row>
    );
}

export default CvAutre;
