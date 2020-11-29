import { Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faAt,
    faPhone,
    faBirthdayCake,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import photoProfil_200 from "../../images/photoProfil_200.jpeg";

function EnTete() {
    return (
        <Row className="enTete">
            <Col className="grey">
                <Row>
                    <h1 className="pl-2 mb-0 font-weight-bold">MOSCA David</h1>
                </Row>
                <Row className="">
                    <Col className="col-4 pr-0">
                        <p className="">
                            <FontAwesomeIcon
                                icon={faBirthdayCake}
                                size="1x"
                                className="mr-2"
                            />
                            14 décembre 1969
                        </p>
                        <p className="">
                            <FontAwesomeIcon
                                icon={faMapMarkerAlt}
                                size="1x"
                                className="mr-2"
                            />
                            Bayonne
                        </p>
                        <p className="">
                            <FontAwesomeIcon
                                icon={faPhone}
                                size="1x"
                                className="mr-2"
                            />
                            06 80 52 15 94
                        </p>
                        <p className="">
                            <FontAwesomeIcon
                                icon={faAt}
                                size="1x"
                                className="mr-2"
                            />
                            <a href="mailto=david.mosca69@gmail.com">
                                david.mosca69@gmail.com
                            </a>
                        </p>
                    </Col>
                    <Col className="col-3 p-0">
                        <p className="">
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="1x"
                                className="mr-2"
                            />
                            <a href="https://github.com/DavidDvpt">DavidDvpt</a>
                        </p>
                        <p className="">
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                size="1x"
                                className="mr-2"
                            />
                            <a href="https://www.linkedin.com/in/david-mosca/">
                                david-mosca
                            </a>
                        </p>
                    </Col>
                </Row>
                <Row className="">
                    <Col>
                        <h2 className="font-weight-bold text-right mt-2">
                            Développeur web junior
                        </h2>
                    </Col>
                </Row>
            </Col>
            <Col md="auto" className="avatar-container grey pr-0">
                <img
                    src={photoProfil_200}
                    alt="avatar"
                    className="avatar rounded-circle"
                />
            </Col>
        </Row>
    );
}

export default EnTete;
