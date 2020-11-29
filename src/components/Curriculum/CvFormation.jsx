import { Container } from "reactstrap";

function CvFormation({ formation, className }) {
    return (
        <Container className={`d-flex flex-column ${className}`}>
            <h5>
                {formation.date} - {formation.nom}
            </h5>
            <p>
                {formation.ecole} - {formation.lieu}
            </p>
        </Container>
    );
}

export default CvFormation;
