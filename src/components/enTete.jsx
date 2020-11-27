import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faAt,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";

import photoProfil_200 from "../images/photoProfil_200.jpeg";

function EnTete() {
    return (
        <Container className="enTete d-flex">
            <Container className="enTete-container-text">
                <h1 className="pl-2 mb-0">MOSCA David</h1>
                <h3 className="pl-2 mb-0">Développeur web junior</h3>
                <div className="pl-2 mt-2">
                    <p className="mb-1">50 ans</p>
                    <p className="mb-1">
                        <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            size="1x"
                            className="mr-2"
                        />
                        Bayonne
                    </p>
                    <p className="mb-1">
                        <FontAwesomeIcon
                            icon={faPhone}
                            size="1x"
                            className="mr-2"
                        />
                        06 80 52 15 94
                    </p>
                    <p className="mb-1">
                        <FontAwesomeIcon
                            icon={faAt}
                            size="1x"
                            className="mr-2"
                        />
                        david.mosca69@gmail.com
                    </p>
                </div>
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
