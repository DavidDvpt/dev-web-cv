import { Container } from "reactstrap";
import photoProfil_200 from "../images/photoProfil_200.jpeg";

function EnTete() {
    return (
        <Container className="d-flex">
            <Container className="col-10">qsdqd</Container>
            <img
                src={photoProfil_200}
                alt="avatar"
                className="col-2 avatar p-0 m-0"
            />
            {/* <Container className="avatarContainer"></Container> */}
        </Container>
    );
}

export default EnTete;
