import { Col, Container, Row } from "reactstrap";
import CompetencesInfo from "./CompetencesInfo";
import CvFormations from "./CvFormations";
import EnTete from "./enTete";
import CvExperiencesPro from "./CvExperiencesPro";
import Profil from "./Profil";
import Langues from "./Langues";
import Interets from "./Interets";
import CvAutre from "./CvAutre";
import { Component } from "react";
import LeftColumn from "./LeftColumn";

class CurriculumContent extends Component {
    render() {
        return (
            <Container className="curriculumContent">
                <EnTete />
                <Row className="mt-3">
                    <LeftColumn className="col-6">
                        <Profil className="pl-5" />
                        <CvFormations />
                        <Langues />
                        <Interets />
                        <CvAutre />
                    </LeftColumn>
                    <Col className="col-6">
                        <CompetencesInfo />
                        <CvExperiencesPro className="" />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CurriculumContent;
