import { useEffect } from "react";
import { Container } from "reactstrap";
import anime from "animejs/lib/anime.es";

const animation = () =>
    anime({
        targets: ".span",
        translateX: 250,
        duration: 1000,
    });

function TestAnime() {
    useEffect(() => {
        animation();
        // anime({
        //     targets: ".div",
        //     translateX: 250,
        //     rotate: "1turn",
        //     backgroundColor: "#FFF",
        //     duration: 5000,
        // });
    }, []);
    return (
        <Container>
            <span className="span">David</span>
            <span className="span">&nbsp;Mosca</span>
            <div className="div">coucou</div>
        </Container>
    );
}

export default TestAnime;
