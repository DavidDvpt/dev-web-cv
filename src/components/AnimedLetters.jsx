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
    })
        .add({
            targets: ".letter",
            opacity: [0, 1],
            translateY: valueY,
            translateX: valueX,
            duration: 500,
            easing: "easeInExpo",
            rotate: {
                value: 360,
                duration: 800,
                easing: "easeInExpo",
            },
            // // difference de taille entre la
            // scale: anime.stagger([0.7, 1], { from: "center" }),
            // // tps entre chaque descente de lettre
            delay: anime.stagger(400, { start: 1000 }),
            // delay: anime.stagger(400, { start: 1000 }),
            //
        })
        .add({
            targets: ".introContainer",
        });
};

function AnimedLetters() {
    useEffect(() => {
        animation();
    }, []);
    return <Container fluid className=""></Container>;
}

export default AnimedLetters;
