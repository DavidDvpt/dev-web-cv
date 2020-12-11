import { useContext, useEffect } from "react";
import { Container } from "reactstrap";
import AnimedLetters from "../components/Intro/AnimedLetters";
import AppContext from "../context/appContext";
import { animationIntro } from "../js/animations";

function Intro() {
    const { setStartNavAnim } = useContext(AppContext);

    useEffect(() => {
        const animation = animationIntro();
        animation.finished.then(() => {
            console.log(
                "l'animation est terminée",
                document.querySelector(".letterBlock").offsetLeft
            );
            setStartNavAnim(true);
        });
    }, []);
    return (
        <Container
            fluid
            className="introContainer d-flex align-content-center flex-wrap"
        >
            <AnimedLetters />
            <div className="d-flex flex-row-reverse col-12">
                <p className="introProfession op-0 ib">
                    Développeur web Junior
                </p>
            </div>
        </Container>
    );
}

export default Intro;
