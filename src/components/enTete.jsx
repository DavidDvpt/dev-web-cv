import { Container } from "reactstrap";
import photoProfil_200 from "../images/photoProfil_200.jpeg";

function EnTete() {
    return (
        <Container className="enTete d-flex">
            <Container className="enTete-container-text">
                <h1 className="pl-1 mb-0">MOSCA David</h1>
                <h3 className="pl-1 mb-0">Développeur web junior</h3>
            </Container>
            <Container className="avatar-container">
                <img
                    src={photoProfil_200}
                    alt="avatar"
                    className="avatar p-0 m-0 h-100"
                />
            </Container>
        </Container>
    );
}

export default EnTete;
