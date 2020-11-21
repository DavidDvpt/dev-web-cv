import { Container } from "reactstrap";
// import anime from "animejs/lib/anime.es.js";

import photoPerso from "../images/photoPerso.jpeg";
const CivilState = () => {
    // anime({
    //     targets: "img",
    //     translateX: -200,
    // });
    return (
        <Container className="civilState d-flex justify-content-end p-0">
            <img src={photoPerso} alt="my face" className="" />
        </Container>
    );
};

export default CivilState;
