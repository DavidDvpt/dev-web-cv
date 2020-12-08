import { Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faAt,
    faPhone,
    faBirthdayCake,
    faWheelchair,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import photoProfil_200 from "../../images/photoProfil_200.jpeg";

function EnTete() {
    return (
        <Row className="enTete">
            <div className="text-container bgd-ternary flex-grow-1 d-flex">
                <div className="col-3 pr-0 d-flex flex-column justify-content-center">
                    <p>
                        <FontAwesomeIcon
                            icon={faBirthdayCake}
                            size="1x"
                            className="mr-2"
                        />
                        14 décembre 1969
                    </p>
                    <p>
                        <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            size="1x"
                            className="mr-2"
                        />
                        Bayonne
                    </p>
                    <p>
                        <FontAwesomeIcon
                            icon={faPhone}
                            size="1x"
                            className="mr-2"
                        />
                        06 80 52 15 94
                    </p>
                    <p>
                        {" "}
                        <FontAwesomeIcon
                            icon={faWheelchair}
                            size="1x"
                            className="mr-2"
                        />
                        Reconnaissance RQTH
                    </p>
                </div>
                <div className="col-3 p-0 d-flex flex-column justify-content-center">
                    <p>
                        <FontAwesomeIcon
                            icon={faAt}
                            size="1x"
                            className="mr-2"
                        />
                        <a href="mailto=david.mosca69@gmail.com">
                            david.mosca69@gmail.com
                        </a>
                    </p>
                    <p className="">
                        <FontAwesomeIcon
                            icon={faGithub}
                            size="1x"
                            className="mr-2"
                        />
                        <a href="https://github.com/DavidDvpt" target="_blank">
                            DavidDvpt
                        </a>
                    </p>
                    <p className="">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            size="1x"
                            className="mr-2"
                        />
                        <a
                            href="https://www.linkedin.com/in/david-mosca/"
                            target="_blank"
                        >
                            david-mosca
                        </a>
                    </p>
                </div>
                <div className="col-6 d-flex flex-column justify-content-end align-content-end flex-grow-1">
                    <h1 className="font-weight-bold text-right">MOSCA David</h1>
                    <h2 className="font-weight-bold text-right">
                        Développeur web junior
                    </h2>
                </div>
            </div>
            <Col className="avatar-container flex-grow-0 pr-0">
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
