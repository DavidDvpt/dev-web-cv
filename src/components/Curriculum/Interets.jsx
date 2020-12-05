import {
    faFilm,
    faGamepad,
    faLaptopCode,
    faUmbrellaBeach,
    faFutbol,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "reactstrap";

import hobby from "../../images/hobby.png";

function Interets() {
    return (
        <>
            <Row>
                <Col>
                    <h4 className="title titleColLeft col-10">
                        <img src={hobby} alt="profil" className="profilIcon" />{" "}
                        Intérets
                    </h4>
                </Col>
            </Row>
            <Row className="p-0 mb-3">
                <Col className="p-0">
                    <div className="text-center">
                        <FontAwesomeIcon icon={faGamepad} size="2x" />
                    </div>
                    <p className="col-11 p-0 m-0">
                        jeux d'aventures (Tomb Raider, Uncharted) et surtout
                        mmorpg (Entropia Universe, DAoC)
                    </p>
                </Col>
                <Col className="p-0 ">
                    <div className="text-center">
                        <FontAwesomeIcon icon={faFilm} size="2x" />
                    </div>
                    <p className="col-11 p-0 m-0">
                        fantastique, heroic fantaisy, policier. GoT, TWD, The
                        Black List.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="p-0">
                    <div className="text-center">
                        <FontAwesomeIcon icon={faUmbrellaBeach} size="2x" />
                    </div>
                    <p className="col-11 p-0 m-0">la côte basque</p>
                </Col>
                <Col className="p-0">
                    <div className="text-center">
                        <FontAwesomeIcon icon={faLaptopCode} size="2x" />
                    </div>
                    <p className="col-11 p-0 m-0">
                        l'informatique hardware, software, programmation
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="p-0 col-6">
                    <div className="text-center">
                        <FontAwesomeIcon icon={faFutbol} size="2x" />
                    </div>
                    <p className="col-11 p-0 m-0">Olympique Lyonnais</p>
                </Col>
            </Row>
        </>
    );
}

export default Interets;
