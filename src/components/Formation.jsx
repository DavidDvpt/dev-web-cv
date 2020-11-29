import { Container } from "reactstrap";

function Formation({ formation }) {
    return (
        <Container className="formation d-flex flex-column">
            <h4>{formation.nom}</h4>
            <p>{formation.date}</p>
            <p>{formation.ecole}</p>
            <p>{formation.lieu}</p>
        </Container>
    );
}

export default Formation;
