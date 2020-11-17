import { Container } from "reactstrap";

import photoPerso from "../images/photoPerso.jpeg";
const CivilState = () => {
    return (
        <Container className="civilState d-flex justify-content-end p-0">
            <img src={photoPerso} alt="my face" className="" />
        </Container>
    );
};

export default CivilState;
