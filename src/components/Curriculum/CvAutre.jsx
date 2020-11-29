import { Row } from "reactstrap";

import question from "../../images/question.png";

function CvAutre() {
    return (
        <Row>
            <h4 className="titleColLeft col-8">
                <img src={question} alt="profil" className="profilIcon" /> Autre
            </h4>
            <p className="col-12">Reconnaissance RQTH</p>
        </Row>
    );
}

export default CvAutre;
