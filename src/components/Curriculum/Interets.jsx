import {
    faFilm,
    faGamepad,
    faLaptopCode,
    faUmbrellaBeach,
    faFutbol,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "reactstrap";
import style from "./curriculum.module.scss";

import hobby from "../../images/hobby.png";

function Interets() {
    return (
        <>
            <Row className="mb-2">
                <Col>
                    <h4
                        className={`${style.title} ${style.titleColLeft} col-12`}
                    >
                        <img
                            src={hobby}
                            alt="profil"
                            className={style.profilIcon}
                        />{" "}
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
                <Col className="col-3 p-0">
                    <div className="text-center">
                        <FontAwesomeIcon icon={faUmbrellaBeach} size="2x" />
                    </div>
                    <p className="col-11 p-0 m-0">la côte basque</p>
                </Col>
                <Col className="col-3 p-0">
                    <div className="text-center">
                        <FontAwesomeIcon icon={faFutbol} size="2x" />
                    </div>
                    <p className="col-11 p-0 m-0">Olympique Lyonnais</p>
                </Col>
                <Col className="col-6 p-0">
                    <div className="text-center">
                        <FontAwesomeIcon icon={faLaptopCode} size="2x" />
                    </div>
                    <p className="col-11 p-0 m-0">
                        l'informatique hardware, software, programmation
                    </p>
                </Col>
            </Row>
            <Row></Row>
        </>
    );
}

export default Interets;
