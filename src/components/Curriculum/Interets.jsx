import {
    faFilm,
    faGamepad,
    faLaptopCode,
    faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row } from "reactstrap";

import hobby from "../../images/hobby.png";

function Interets() {
    return (
        <Row>
            <h4 className="titleColLeft col-8">
                <img src={hobby} alt="profil" className="profilIcon" /> Profil
            </h4>
            <div>
                <p>
                    <FontAwesomeIcon icon={faGamepad} size="2x" />
                    Entropia Universe, jeux d'aventures (Tomb Raider, Uncharted,
                    ...)
                </p>
                <p>
                    <FontAwesomeIcon icon={faFilm} size="2x" />
                    films et séries comme Lords of Rings, GoT, TWD, ...
                </p>
                <p>
                    <FontAwesomeIcon icon={faUmbrellaBeach} size="2x" />
                    la côte basque
                </p>
                <p>
                    <FontAwesomeIcon icon={faLaptopCode} size="2x" />
                    l'informatique et tout ce qui gravite autour
                </p>
            </div>
        </Row>
    );
}

export default Interets;
