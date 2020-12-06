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
import "./curriculum.scss";

class CurriculumContent extends Component {
    render() {
        return (
            <Container className="curriculumContent">
                <EnTete />
                <Row className="mt-3">
                    <LeftColumn className="col-6">
                        <Profil className="p-0" />
                        <CvFormations />
                        <Langues />
                        <Interets />
                        <CvAutre />
                    </LeftColumn>
                    <div className="right-column col-6">
                        <CompetencesInfo />
                        <CvExperiencesPro />
                    </div>
                </Row>
            </Container>
        );
    }
}

export default CurriculumContent;
