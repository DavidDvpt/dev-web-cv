import {
    faFilm,
    faGamepad,
    faLaptopCode,
    faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "reactstrap";

function Interets() {
    return (
        <Container>
            <h4>Interets</h4>
            <Container>
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
            </Container>
        </Container>
    );
}

export default Interets;
