import { Col, Row } from "reactstrap";
import {
    faReact,
    faNodeJs,
    faGitAlt,
    faJs,
    faLinux,
    faBootstrap,
    faPhp,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import question from "../../images/question.png";

function CompetencesInfo() {
    return (
        <Row>
            <Col>
                <h4 className="titleColRight col-12">
                    <img src={question} alt="profil" className="profilIcon" />{" "}
                    Autre
                </h4>
            </Col>
            <div className="d-flex flex-wrap">
                <FontAwesomeIcon
                    icon={faNodeJs}
                    size="5x"
                    className="col-3 my-2"
                />
                <FontAwesomeIcon
                    icon={faJs}
                    size="5x"
                    className="col-3 my-2"
                    color="yellow"
                />
                <FontAwesomeIcon
                    icon={faReact}
                    size="5x"
                    className="col-3 my-2"
                    color="cyan"
                />

                <FontAwesomeIcon
                    icon={faGitAlt}
                    size="5x"
                    className="col-3 my-2"
                    color="orange"
                />

                <FontAwesomeIcon
                    icon={faPhp}
                    size="5x"
                    className="col-3 my-2"
                    color="blue"
                />
                <FontAwesomeIcon
                    icon={faDatabase}
                    size="5x"
                    className="col-3 my-2"
                />
                <FontAwesomeIcon
                    icon={faLinux}
                    size="5x"
                    className="col-3 my-2"
                />
                <FontAwesomeIcon
                    icon={faBootstrap}
                    size="5x"
                    className="col-3 my-2"
                    color="dark blue"
                />
            </div>
        </Row>
    );
}

export default CompetencesInfo;
