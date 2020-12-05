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
import vsCode from "../../images/Visual_Studio.png";
import windows from "../../images/windows.png";

function CompetencesInfo() {
    return (
        <>
            <Row>
                <Col>
                    <h4 className="title col-10">
                        <img
                            src={question}
                            alt="profil"
                            className="profilIcon"
                        />{" "}
                        Compétences informatiques
                    </h4>
                </Col>
            </Row>
            <Row className="mb-3">
                <h6 className="col-3 my-auto">Hard skill</h6>
                <Row className="col-9 pl-0">
                    <FontAwesomeIcon
                        icon={faNodeJs}
                        size="2x"
                        className="m-2"
                        color="#88c043"
                    />
                    <FontAwesomeIcon
                        icon={faJs}
                        size="2x"
                        className="m-2"
                        color="#f7df1e"
                    />
                    <FontAwesomeIcon
                        icon={faReact}
                        size="2x"
                        className="m-2"
                        color="	#61dafb"
                    />
                    <FontAwesomeIcon
                        icon={faPhp}
                        size="2x"
                        className="m-2"
                        color="#8993c1"
                    />
                    <FontAwesomeIcon
                        icon={faDatabase}
                        size="2x"
                        className="m-2"
                        color="#ffa500"
                    />
                    <FontAwesomeIcon
                        icon={faBootstrap}
                        size="2x"
                        className="m-2"
                        color="#563d7c"
                    />
                </Row>
            </Row>
            <Row className="mb-3">
                <h6 className="col-3 my-auto">Soft skill</h6>
                <p className="row col-9 pl-0 my-auto">
                    <span className="badge-pill mx-1">Curieux</span>
                    <span className="badge-pill mx-1">Autonome</span>
                    <span className="badge-pill mx-1">Rigoureux</span>
                    <span className="badge-pill mx-1">Pertinent</span>
                </p>
            </Row>
            <Row className="mb-3">
                <h6 className="col-3 my-auto">Environnement</h6>
                <p className="col-9 pl-0 my-auto row align-items-center">
                    <FontAwesomeIcon
                        icon={faGitAlt}
                        size="2x"
                        className="m-2"
                        color="#f05033"
                    />
                    <FontAwesomeIcon
                        icon={faUbuntu}
                        size="2x"
                        className="mx-2"
                        color="#ff5e09"
                    />
                    <img
                        src={windows}
                        alt="windows logo"
                        className="comp-info-icon mx-2"
                    />
                    <img
                        src={vsCode}
                        alt="visual studio code"
                        className="comp-info-icon mx-2"
                    />
                    <span className="badge-pill mx-2">WSL 2</span>
                </p>
            </Row>
        </>
    );
}

export default CompetencesInfo;
