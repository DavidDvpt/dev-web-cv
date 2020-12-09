import { Col, Row } from "reactstrap";
import CvFormation from "./CvFormation";
import { formationsAndDiplomes } from "../../data/staticData";
import hat from "../../images/graduation-hat.png";
import style from "./curriculum.module.scss";

function CvFormations() {
    const formations = formationsAndDiplomes;

    return (
        <Row className="mb-2">
            <Col>
                {" "}
                <h4 className={`${style.title} ${style.titleColLeft} col-12`}>
                    <img src={hat} alt="profil" className={style.profilIcon} />
                    &nbsp;Formations et diplômes
                </h4>
            </Col>

            {formations.map((f, i) => (
                <CvFormation
                    key={f.nom.concat(i)}
                    formation={f}
                    className="px-3 pb-0"
                />
            ))}
        </Row>
    );
}

export default CvFormations;
