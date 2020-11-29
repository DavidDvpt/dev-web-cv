import { Row } from "reactstrap";

import language from "../../images/language.png";

function Langues() {
    return (
        <Row>
            <h4 className="titleColLeft col-8">
                <img src={language} alt="profil" className="profilIcon" />{" "}
                Langues
            </h4>
            <div className="col-12">
                <p>Anglais : B1</p>
                <p>Espagnol : notions</p>
            </div>
        </Row>
    );
}

export default Langues;
