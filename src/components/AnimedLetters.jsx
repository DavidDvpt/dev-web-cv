import { Container } from "reactstrap";
import anime from "animejs/lib/anime.es";

anime({
    targets: ".letter",
    opacity: 1,
    translateY: 100,
    rotate: {
        value: 360,
        duration: 1000,
        easing: "easeInExpo",
    },
    // difference de taille entre la
    //scale: anime.stagger([0.7, 1], { from: "center" }),
    // tps entre chaque descente de lettre
    delay: anime.stagger(400, { start: 1000 }),
    translateX: [-10, 30],
});

function AnimedLetters() {
    return (
        <Container>
            <span className="letter">D</span>
            <span className="letter">a</span>
            <span className="letter">v</span>
            <span className="letter">i</span>
            <span className="letter">d</span>
            <div></div>
            <span className="letter">M</span>
            <span className="letter">O</span>
            <span className="letter">S</span>
            <span className="letter">C</span>
            <span className="letter">A</span>
        </Container>
    );
}

export default AnimedLetters;
