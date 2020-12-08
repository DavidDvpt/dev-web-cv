import { Col, Container, Row } from "reactstrap";
import underConstruction from "../images/underConstruction.png";

const UnderConstruction = () => {
    return (
        <Container className="h-100 d-flex justify-content-center align-items-center">
            <img
                src={underConstruction}
                alt="under construction"
                className="bg-white d-block"
            />
        </Container>
    );
};

export default UnderConstruction;
