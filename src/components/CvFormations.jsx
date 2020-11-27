import { Container } from "reactstrap";
import CvFormation from "../components/CvFormation";
import { formationsAndDiplomes } from "../data/staticData";

function CvFormations() {
    const formations = formationsAndDiplomes;

    return (
        <Container className="">
            <h4 className="">Formations et diplômes</h4>
            {formations.map((f) => (
                <CvFormation formation={f} className="pl-5" />
            ))}
        </Container>
    );
}

export default CvFormations;
