import { Container } from "reactstrap";
// import TestAnime from "../components/TestAnime";
import AnimedLetters from "../components/AnimedLetters";

// import AnimeEffect from "../components/AnimeName";

function Intro() {
    return (
        <Container fluid className="introContainer">
            {/* <AnimeEffect /> */}
            <AnimedLetters />
            {/* <TestAnime /> */}
        </Container>
    );
}

export default Intro;
