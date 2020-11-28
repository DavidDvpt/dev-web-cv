import { Container } from "reactstrap";
import {
    faReact,
    faNodeJs,
    faGitAlt,
    faJs,
    faLinux,
    faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CompetencesInfo() {
    return (
        <Container>
            <h4>Competences Informatiques</h4>
            <div className="d-flex flex-wrap">
                <FontAwesomeIcon
                    icon={faNodeJs}
                    size="5x"
                    className="col-3 my-2"
                />
                <FontAwesomeIcon
                    icon={faReact}
                    size="5x"
                    className="col-3 my-2"
                />
                <FontAwesomeIcon
                    icon={faGitAlt}
                    size="5x"
                    className="col-3 my-2"
                />
                <FontAwesomeIcon icon={faJs} size="5x" className="col-3 my-2" />
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
                />
            </div>
        </Container>
    );
}

export default CompetencesInfo;
