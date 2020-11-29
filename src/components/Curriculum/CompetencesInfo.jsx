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
                    color="#88c043"
                />
                <FontAwesomeIcon
                    icon={faJs}
                    size="5x"
                    className="col-3 my-2"
                    color="#f7df1e"
                />
                <FontAwesomeIcon
                    icon={faReact}
                    size="5x"
                    className="col-3 my-2"
                    color="	#61dafb"
                />

                <FontAwesomeIcon
                    icon={faGitAlt}
                    size="5x"
                    className="col-3 my-2"
                    color="#f05033"
                />

                <FontAwesomeIcon
                    icon={faPhp}
                    size="5x"
                    className="col-3 my-2"
                    color="#8993c1"
                />
                <FontAwesomeIcon
                    icon={faDatabase}
                    size="5x"
                    className="col-3 my-2"
                    color="#ffa500"
                />
                <FontAwesomeIcon
                    icon={faUbuntu}
                    size="5x"
                    className="col-3 my-2"
                    color="#ff5e09"
                />
                <FontAwesomeIcon
                    icon={faBootstrap}
                    size="5x"
                    className="col-3 my-2"
                    color="#563d7c"
                />
            </div>
        </Row>
    );
}

export default CompetencesInfo;
