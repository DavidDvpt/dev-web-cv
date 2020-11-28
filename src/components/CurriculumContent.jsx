import { Col, Container, Row } from "reactstrap";
import CompetencesInfo from "../components/CompetencesInfo";
import CvFormations from "../components/CvFormations";
import EnTete from "../components/enTete";
import CvExperiencesPro from "../components/CvExperiencesPro";
import Profil from "../components/Profil";
import Langues from "../components/Langues";
import Interets from "../components/Interets";
import CvAutre from "../components/CvAutre";
import { Component } from "react";

class CurriculumContent extends Component {
    render() {
        return (
            <Container className="curriculumContent">
                <EnTete />
                <Row className="d-flex">
                    <Col className="groupInfos col-6 mt-3">
                        <Profil className="pl-5" />
                        <CvFormations />
                        <Langues />
                        <Interets />
                        <CvAutre />
                    </Col>
                    <Col className="col-6 mt-3">
                        <CompetencesInfo />
                        <CvExperiencesPro className="" />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CurriculumContent;
