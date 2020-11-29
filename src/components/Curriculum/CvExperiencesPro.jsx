import { Container } from "reactstrap";
import { experiencesProfessionnelles } from "../../data/staticData";
import CvExperiencePro from "./CvExperiencePro";

function CvExperiencesPro({ className }) {
    return (
        <Container className={className}>
            <h4>Experience professionnelle</h4>
            {experiencesProfessionnelles.map((exp) => (
                <CvExperiencePro experiencePro={exp} />
            ))}
        </Container>
    );
}

export default CvExperiencesPro;
