import { useEffect } from "react";
import { Container } from "reactstrap";
import { animationIntro } from "../js/animations";

function Intro() {
    useEffect(() => {
        const animation = animationIntro();
        animation.finished.then(
            console.log(
                "l'animation est terminée",
                document.querySelector(".letterBlock").offsetLeft
            )
        );
    }, []);
    return (
        <Container
            fluid
            className="introContainer d-flex align-content-center flex-wrap"
        >
            <div className="letterBlock col-12 p-0 m-auto">
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
            <div className="d-flex flex-row-reverse col-12">
                <p className="introProfession op-0 ib">
                    Développeur web Junior
                </p>
            </div>
        </Container>
    );
}

export default Intro;
