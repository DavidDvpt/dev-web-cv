import { Col, Row } from "reactstrap";
import style from "./curriculum.module.scss";

import language from "../../images/language.png";

function Langues() {
    return (
        <Row className="mb-2">
            <Col>
                <h4 className={`${style.title} ${style.titleColLeft} col-12`}>
                    <img
                        src={language}
                        alt="profil"
                        className={style.profilIcon}
                    />{" "}
                    Langues
                </h4>
            </Col>

            <Col className="col-12">
                <Row className="mb-2">
                    <h5 className="mb-0">Anglais :</h5>
                    <p className="mb-0 ml-2">B1</p>
                </Row>
                <Row className="mb-2 align-content-center">
                    <h5 className="mb-0">Espagnol :</h5>
                    <p className="mb-0 ml-2 ">notions</p>
                </Row>
            </Col>
        </Row>
    );
}

export default Langues;
