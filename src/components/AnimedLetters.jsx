import { useEffect } from "react";
import { Container } from "reactstrap";
import anime from "animejs/lib/anime.es";

const animation = () => {
    const valueY = Math.floor(window.innerHeight * 0.4);
    const valueX = Math.floor(window.innerWidth * 0.2);
    const tl = anime.timeline({
        easing: "linear",
        duration: 750,
    });
    tl.add({
        targets: ".introContainer",
        backgroundColor: ["#fff", "#0E0441"],
        duration: 1000,
    }).add({
        targets: ".letter",
        opacity: [0, 1],
        translateY: valueY,
        translateX: valueX,
        duration: 100,
        easing: "linear",
        rotate: {
            value: 360,
            duration: 1000,
            easing: "easeInExpo",
        },
        // // difference de taille entre la
        // scale: anime.stagger([0.7, 1], { from: "center" }),
        // // tps entre chaque descente de lettre
        delay: anime.stagger(400, { start: 1000 }),
        // delay: anime.stagger(400, { start: 1000 }),
        //
    });
};

function AnimedLetters() {
    useEffect(() => {
        animation();
    }, []);
    return (
        <Container fluid className="">
            <span className="letter">D</span>
            <span className="letter">a</span>
            <span className="letter">v</span>
            <span className="letter">i</span>
            <span className="letter">d</span>

            <span className="letter">&nbsp;M</span>
            <span className="letter">O</span>
            <span className="letter">S</span>
            <span className="letter">C</span>
            <span className="letter">A</span>
        </Container>
    );
}

export default AnimedLetters;
