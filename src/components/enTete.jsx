import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faAt,
    faPhone,
    faBirthdayCake,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import photoProfil_200 from "../images/photoProfil_200.jpeg";

function EnTete() {
    return (
        <Container className="enTete d-flex">
            <Container className="enTete-container-text">
                <h1 className="pl-2 mb-0">MOSCA David</h1>
                <Container className="d-flex">
                    <div className="pl-2 mt-2 col-4">
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
                                {" "}
                                david.mosca69@gmail.com
                            </a>
                        </p>
                    </div>
                    <div className="pl-2 mt-2 col-4">
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
                    </div>
                </Container>
                <h2 className="pl-2 mb-0 text-right">Développeur web junior</h2>
            </Container>
            <Container className="avatar-container">
                <img
                    src={photoProfil_200}
                    alt="avatar"
                    className="avatar p-0 m-0 h-100"
                />
            </Container>
        </Container>
    );
}

export default EnTete;
