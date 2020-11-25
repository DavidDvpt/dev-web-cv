import { Container } from "reactstrap";
import Formation from "../components/Formation";
import { formationsAndDiplomes } from "../data/staticData";

function Formations() {
    const formations = formationsAndDiplomes;

    return (
        <Container className="formations d-flex flex-column align-content-center">
            <h1 className="text-center">Formations et diplômes</h1>
            {formations.map((f) => (
                <Formation formation={f} />
            ))}
        </Container>
    );
}

export default Formations;
