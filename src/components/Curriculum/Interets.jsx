import {
    faFilm,
    faGamepad,
    faLaptopCode,
    faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "reactstrap";

import hobby from "../../images/hobby.png";

function Interets() {
    return (
        <Row>
            <Col>
                <h4 className="title titleColLeft col-10">
                    <img src={hobby} alt="profil" className="profilIcon" />{" "}
                    Intérets
                </h4>
            </Col>

            <Col className="col-12">
                <Row className="mb-2">
                    <Col className="col-1">
                        <FontAwesomeIcon icon={faGamepad} size="2x" />
                    </Col>
                    <p className="col-11 pl-4">
                        Entropia Universe, DaoC, jeux d'aventures (Tomb Raider,
                        Uncharted, ...)
                    </p>
                </Row>
                <Row className="mb-2">
                    <Col className="col-1">
                        <FontAwesomeIcon icon={faFilm} size="2x" />
                    </Col>
                    <p className="col-11 pl-4">
                        films et séries comme Lords of Rings, GoT, TWD
                    </p>
                </Row>
                <Row className="mb-2">
                    <Col className="col-1">
                        <FontAwesomeIcon icon={faUmbrellaBeach} size="2x" />
                    </Col>
                    <p className="col-11 pl-4">la côte basque</p>
                </Row>
                <Row className="mb-2">
                    <Col className="col-1">
                        <FontAwesomeIcon icon={faLaptopCode} size="2x" />
                    </Col>
                    <p className="col-11 pl-4">
                        l'informatique et tout ce qui gravite autour
                    </p>
                </Row>
            </Col>
        </Row>
    );
}

export default Interets;
