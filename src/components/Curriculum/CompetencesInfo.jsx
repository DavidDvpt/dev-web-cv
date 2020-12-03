import { Col, Row } from "reactstrap";
import {
    faReact,
    faNodeJs,
    faGitAlt,
    faJs,
    faUbuntu,
    faBootstrap,
    faPhp,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import question from "../../images/question.png";

function CompetencesInfo() {
    return (
        <>
            <Row>
                <Col>
                    <h4 className="titleColRight col-10">
                        <img
                            src={question}
                            alt="profil"
                            className="profilIcon"
                        />{" "}
                        Comptences informatiques
                    </h4>
                </Col>
            </Row>
            <Row>
                <Col className="col-3">Hard skill</Col>
                <Col className="col-9">
                    <Row>
                        <FontAwesomeIcon
                            icon={faNodeJs}
                            size="2x"
                            className="col my-2"
                            color="#88c043"
                        />
                        <FontAwesomeIcon
                            icon={faJs}
                            size="2x"
                            className="col my-2"
                            color="#f7df1e"
                        />
                        <FontAwesomeIcon
                            icon={faReact}
                            size="2x"
                            className="col my-2"
                            color="	#61dafb"
                        />
                        <FontAwesomeIcon
                            icon={faPhp}
                            size="2x"
                            className="col my-2"
                            color="#8993c1"
                        />
                        <FontAwesomeIcon
                            icon={faDatabase}
                            size="2x"
                            className="col my-2"
                            color="#ffa500"
                        />
                        <FontAwesomeIcon
                            icon={faBootstrap}
                            size="2x"
                            className="col my-2"
                            color="#563d7c"
                        />
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className="col-3">Environnement</Col>
                <Col className="col-9">
                    <Row>
                        <FontAwesomeIcon
                            icon={faGitAlt}
                            size="2x"
                            className="col-2 my-2"
                            color="#f05033"
                        />
                        <FontAwesomeIcon
                            icon={faUbuntu}
                            size="2x"
                            className="col-2 my-2"
                            color="#ff5e09"
                        />
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default CompetencesInfo;
