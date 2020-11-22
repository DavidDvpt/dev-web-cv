import { useEffect } from "react";
import { Container } from "reactstrap";
import { animationIntro } from "../js/animations";

function Intro() {
    useEffect(() => {
        animationIntro();
    }, []);
    return (
        <Container
            fluid
            className="introContainer d-flex align-content-center flex-wrap align-self-center"
        >
            <div className="col-12">
                <span className="letter ib op-0">D</span>
                <span className="letter ib op-0">a</span>
                <span className="letter ib op-0">v</span>
                <span className="letter ib op-0">i</span>
                <span className="letter ib op-0">d</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className="letter ib op-0">M</span>
                <span className="letter ib op-0">O</span>
                <span className="letter ib op-0">S</span>
                <span className="letter ib op-0">C</span>
                <span className="letter ib op-0">A</span>
            </div>
            <div className="introProfession op-0 col-12">
                Développeur web Junior
            </div>
        </Container>
    );
}

export default Intro;
