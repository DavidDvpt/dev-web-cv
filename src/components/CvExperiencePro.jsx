import { Container } from "reactstrap";
import CvContenuExperiencePro from "./CvContenuExperiencePro";

function CvExperiencePro({ experiencePro }) {
    return (
        <Container>
            <h5>
                {experiencePro.date} - {experiencePro.nom}
            </h5>
            <ul>
                {experiencePro.contenu.map((elmt) => {
                    return <CvContenuExperiencePro elmt={elmt} />;
                })}
            </ul>
        </Container>
    );
}

export default CvExperiencePro;
